<template>
  <v-app>
    <v-btn @click="getData">Search</v-btn>
    <RecipeResults :recipes="recipes"/>
  </v-app>
</template>

<script>
import RecipeResults from './components/RecipeResults';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    RecipeResults,
  },
  data: () => ({
    recipes: []
  }),
  methods: {
    getData() {
      let vm = this;
      return axios({
        "method":"GET",
        "url":"https://webknox-recipes.p.rapidapi.com/recipes/search",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"webknox-recipes.p.rapidapi.com",
        "x-rapidapi-key":"97a621d563msh086acdf5f8c2825p130acbjsn9b527c1f9c37"
        },"params":{
        "offset":"0",
        "query":"burger"
        }
        })
      .then(function (response) {
        vm.recipes = response.data.results;
      });
    }
  }
};
</script>
