<template>
  <v-app>
  <v-content>
    <v-container
      class="fill-height"
      fluid
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          sm="8"
          md="4"
        >
          <v-form class="form"
          ref="form"
          v-model="valid"
          lazy-validation>
            <h1>Recipe Search</h1>
            <v-text-field
              v-model="main"
              label="Search for a recipe (ex: burgers, pizza, etc...)"
              :rules="[v => !!v || 'This field is required']"
              required
            ></v-text-field>
            <v-select
              v-model="type"
              :items="typeItems"
              label="Type of food (optional)"
            ></v-select>
            <v-btn @click="getData">Search</v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
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
    valid: true,
    recipes: [],
    main: '',
    type: '',
    typeItems: ["main course", "side dish", "dessert", "appetizer", "salad", "bread", "breakfast", "soup", "beverage", "sauce", "drink"]
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
        "type": vm.type,
        "query": vm.main
        }
        })
      .then(function (response) {
        vm.recipes = response.data.results;
      });
    }
  }
};
</script>

<style>
  .form {
    width: 400px;
  }
</style>
