//Skapat början av mitt serverskript
const { json } = require("express");
const express = require("express");
const app = express();
let fs = require("fs");

app.use(express.static("Publik"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(3000);
console.log("Kör servern på localhost:3000");
console.log(__dirname)

app.get("/guestbook", (req, res) => {
    res.sendFile(__dirname + '/Publik/index.html')
});
app.post("/messages", async (req, res) => {
  const newMessage = req.body.activity
  await fs.readFile('./gastbok.json', 'utf8', async (err, data) => {
      
      if (err) {
        console.log('File read failed:', err);
        return;
      }

      const Messages = JSON.parse(data)
      Messages.gastboksinlagg.push(newMessage)
     
      await fs.writeFileSync('./gastbok.json', JSON.stringify(Messages, null, 2))

      res.sendFile(__dirname + '/Publik/index.html')
    });    
});
app.get("/messages", async (req, res) => {
  await fs.readFile('gastbok.json', 'utf8', (err, data) => {
      if (err) {
        console.log('File read failed:', err);
        return;
      }
      res.send(data)
    });    
  })

  
/