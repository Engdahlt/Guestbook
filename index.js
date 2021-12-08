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
    res.sendFile(__dirname + '/publik/index.html')
});
app.post("/guestbook", (req, res) => {

  let namnInput = {
        namn: req.body.namn,
        epost: req.body.epost,
        amne: req.body.amne,
        inlagg: req.body.inlagg
      };
    
fs.readFile('./gastbok.json', 'utf8', (err, minJson) => {
        
        if (err) {
          console.log('Error när fil läses in:', err);
          return;
        }

      const inlaggsInput = JSON.parse(minJson)
      inlaggsInput.gastboksinlagg.push(namnInput)
       
      fs.writeFileSync('./gastbok.json', JSON.stringify(inlaggsInput, null, 2), (err) => {
        if (err) throw err;
      });

        res.sendFile(__dirname + '/publik/index.html')
      });    

    });


