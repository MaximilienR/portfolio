<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p v-if="teamv ==0">  personne n'aime  vue.js pour le moment 😿 </p>
    <p v-else-if="teamv == 1" > une perssone aime vue.js c'est pas si mal </p>
    <p v-else >{{teamv}} personnes adore  vue.js </p>
    <button v-on:click="subscribe()">Rejoindre</button>
    <div class="comment" v-for="(comment, idx  ) in comments" v-bind:key="idx">
      <h3>{{comment.nom}}</h3>
      <p>{{comment.commentaire}}</p>
      <div v-if="comment.note>1">
      <span v-for="i in comment.note" v-bind:key="i">👍</span>
    </div>
    <span v-else>👎</span>
  </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function(){
    return{
      teamv:0,
      comments:[{
        nom : 'Random Smith ',
        commentaire:" Vue c'est trop bien",
        note: 10,

      },{nom : 'Jean  Dupond ',
        commentaire:" tu parles c'est de la 💩 angular est 100 fois mieu",
        note: 1,
      }],
    }
  },
  methods:{
    subscribe:function(){
      this.teamv++;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color
  : #42b983;
}

p {
  font-size:22px
}
</style>
