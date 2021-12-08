//Klientskript
window.onload = () => {
    // från holgers lektion 6/12
    // let hamtaData = function() {
    //     let forfragan = new XMLHttpRequest();   // skapa ett nytt XMLHttpRequest
    //     forfragan.open("GET", "./gastbok.json"); // hämta en route som implementeras på servern
    //     forfragan.onload = function() {         // funktion som anropas när vi fått resultatet från servern
    //         console.log("Mottog svar från servern!");
    //         console.log(this.response);         // textsträng som hämtats från server
    //         data = JSON.parse(this.response);   // gör om textsträng till JavaScript-objekt (i detta fall ett fält med två objekt)
    //         console.log(data);
    //         for (let i = 0; i < data.length; i++) { // för vart och ett av objekten i fältet
    //             for (attribut in data[i]) {
    //                 document.getElementById("output").innerHTML += data[i][attribut] + " ";
    //             }
    //             document.getElementById("output").innerHTML += "<br>";
    //         }
    //     }
    //     forfragan.send(); 
    // hamtaData();                      // skicka förfrågan
    // }
 
    const output = document.getElementById("output")
    let getMsgData = function () {
        let dataRequest = new XMLHttpRequest();
        dataRequest.open("GET", "/messages");
        dataRequest.onload = function () {
            
            const data = JSON.parse(this.response);
            console.log(data)
            data.gastboksinlagg.map(msg => {
                output.innerHTML += `
                  <td>${msg.namn}</td>              
                  <td>${msg.epost}</td>
                  <td>${msg.amne}</td>
                  <td>${msg.inlagg}</td>
                  `
            })
        }
        dataRequest.send();                       // skicka förfrågan
    }
    getMsgData()
}