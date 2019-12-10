<template>
  <v-content>
    <v-container>
      <v-row>
        <v-col v-for="recipe in recipes" v-bind:key="recipe.id">
            <RecipeCard :recipe="recipe" :isfavorite="favorite"/>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<style>

</style>

<script>
import RecipeCard from './RecipeCard';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    RecipeCard
  },
  data: () => ({
    recipes: [],
    show: false,
    favorite: true
  }),
  created: function() {
    let vm = this;
    let array = this.$store.state.favorites;
    array.forEach(function(fav) {
      let url = "https://webknox-recipes.p.rapidapi.com/recipes/" + fav + "/information";
      return axios({
        "method":"GET",
        "url": url,
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"webknox-recipes.p.rapidapi.com",
        "x-rapidapi-key":"97a621d563msh086acdf5f8c2825p130acbjsn9b527c1f9c37"
        }
        })
        .then((response)=>{
          vm.recipes.push(response.data);
        });
    });
  }
};
</script>
