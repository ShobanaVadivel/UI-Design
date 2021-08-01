//Destinations
const dest= document.getElementById("destination1");
var api2= fetch("https://run.mocky.io/v3/3e6901dd-9a60-4771-a8cb-9c62177a654c",
 { method: "GET" })
.then((data) => { return data.json(); })
.then((user) => countryDisplay(user)) ;

function countryDisplay(res){
/* console.log(res.result); */
    let arrData= res.result;
    for(let i=0;i<arrData.length;i++){
    const containerList = document.createElement("div");
      containerList.className="container"
        containerList.innerHTML=`
        <h1>${arrData[i].city}</h1>
        <img src="${arrData[i].imageUrl}"></img>  
        `
       destination1.append(containerList);
    }
}

