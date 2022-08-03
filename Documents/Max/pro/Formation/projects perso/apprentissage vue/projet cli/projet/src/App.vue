<template>
  <h1>Tableau en vue.js</h1>
  <inscrits :liste="personnes"></inscrits>
</template>

<script>
import Inscrits from './components/Inscrits.vue'
export default {
    name:'App',
    components: {
        Inscrits
    },data(){
        return{
            personnes:[
                {prenom:"Jean",nom:"Dupont",age:25},
                 {prenom:"Random",nom:"Smith",age:30},
                 {prenom:"Malcom",nom:"Ranger",age:57},
                 {prenom:"Christophe",nom:"Leblanc",age:44},
                 
            ]
        }
    }}

</script>

<style>
th{background-color: red;}
table{
    background-color: aqua;
    margin-left:35%;
    width: 500px;}
h1{text-align: center;}
body{background-color: silver;}
</style>