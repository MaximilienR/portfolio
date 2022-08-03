console.log('test')
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
<img src=" " class="card-img-top" alt="...">
<div class="card-body">
 <input type="text" placeholder="recherche">  <button><img src="/apppMeteo/img/search.png" id="searchImg"/></button>

  <h5 class="card-title">${liste.main.temp}c</h5>
  <span>${liste.country}</span>
  <span>${liste.main.humidity}</span>


</div>
 
</div>
`
    
}