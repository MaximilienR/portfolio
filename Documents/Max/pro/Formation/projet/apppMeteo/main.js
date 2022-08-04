console.log('test')
var demande = document.getElementById('demande')
if (demande!="") {
    console.log('veuillez saisir du texte')
}else{console.log(demande)}

var save = document.getElementById("demande");
function action() {
    console.log(demande)
}

const axi = document.getElementById("met");
var liste;
fetch("https://api.openweathermap.org/data/2.5/weather?q=bethune&units=metric&appid=f1d14debaa874f9e1698ca874b570186")
.then(response=>response.json()) 
.then(data=>{
    liste=data;
     alert()
    console.log(liste.temp);
    affiche();

});

function affiche() {axi.innerHTML=`
<div class="card" style="width: 18rem;">
 <div class="card-body">
 <input type="text" placeholder="recherche" id="demande">  <button onclick="action()"><img src="/apppMeteo/img/search.png" id="searchImg"/></button>

  <h5 class="card-title">${liste.main.temp}c</h5>
  <span>${liste.weather.icon}</span><br/>
  <span>humidity :${liste.main.humidity}%</span><br/>
  <span>Wind speed :${liste.wind.speed}km</span>


</div>
 
</div>
`
    
}