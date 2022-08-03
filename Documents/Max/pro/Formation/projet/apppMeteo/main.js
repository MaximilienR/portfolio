console.log('test')

function action() {
    alert('ok')
}
const axi = document.getElementById("met");
var liste;
fetch("https://api.openweathermap.org/data/2.5/weather?q=bethune&units=metric&appid=f1d14debaa874f9e1698ca874b570186")
.then(response=>response.json()) 
.then(data=>{
    liste=data;
    alert()
    console.log(liste.temp);
    foo();

});

function foo() {axi.innerHTML=`
<div class="card" style="width: 18rem;">
 <div class="card-body">
 <input type="text" placeholder="recherche">  <button onclick="action()"><img src="/apppMeteo/img/search.png" id="searchImg"/></button>

  <h5 class="card-title">${liste.main.temp}c</h5>
  
  <span>humidity :${liste.main.humidity}%</span><br/>
  <span>Wind speed :${liste.wind.speed}km</span>


</div>
 
</div>
`
    
}