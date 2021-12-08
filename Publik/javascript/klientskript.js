//Klientskript
window.onload = () => {
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
        dataRequest.send();                       
    }
    getMsgData()
}