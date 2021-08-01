const weather= document.getElementById("weather1");
var api1= fetch("https://run.mocky.io/v3/e3ae9d2e-78f5-403d-b6cd-fa7f8c7e1576",
 { method: "GET" })
.then((data) => { return data.json(); })
.then((user) =>weatherDisplay(user)) ;

function weatherDisplay(res){
/* console.log(res.result); */
    let arrData= res.result;
    for(let i=0;i<arrData.length;i++){
    const containerItem = document.createElement("div");
      containerItem.className="containerPic"
        containerItem.innerHTML=`
       
        <h1>${arrData[i].city}</h1>
        <p><img class="icon" src="icon.png"></p>
        <p>${arrData[i].temp_Celsius}<sup>0</sup></p>
       
       
        `
       weather1.append(containerItem);
    }
}


function validateInput(){
    
}




