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
            <v-text-field
              v-model="main"
              label="Search for a recipe"
              :rules="[v => !!v || 'This field is required']"
              required
            ></v-text-field>
            <a @click="advanced=!advanced">Advanced Search</a>
            <transition name="fade">
              <div v-if="advanced">
                <v-select
                  v-model="type"
                  :items="typeItems"
                  label="Type of food"
                ></v-select>
                <v-text-field
                  v-model="number"
                  label="Number of results (0 to 100)"
                  :rules="[v => (v >= 0 && v <= 100) || 'Must be a value between 1 and 100']"
                  required
                ></v-text-field>
                <v-select
                  v-model="cuisine"
                  :items="cuisineItems"
                  label="Cuisine"
                ></v-select>
              </div>
            </transition>
            <v-btn class="form light-blue white--text" @click="getData">Search</v-btn>
          </v-form>
          <p class="center" v-if="noResults">No results found</p>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
    <transition name="fade">
      <RecipeResults :recipes="recipes"/>
    </transition>
  </v-app>
</template>

<script>
import RecipeResults from './RecipeResults';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    RecipeResults,
  },
  data: () => ({
    valid: true,
    noResults: false,
    results: false,
    advanced: false,
    recipes: [],
    main: '',
    error: '',
    type: '',
    typeItems: ["main course", "side dish", "dessert", "appetizer", "salad", "bread", "breakfast", "soup", "beverage", "sauce", "drink"],
    number: 10,
    cuisineItems: ["african", "chinese", "japanese", "korean", "vietnamese", "thai", "indian", "british", "irish", "french", "italian", "mexican", "spanish", "middle eastern", "jewish", "american", "cajun", "southern", "greek", "german", "nordic", "eastern european", "caribbean", "latin american"],
    cuisine: ""
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
        "query": vm.main,
        "number": vm.number
        }
        })
      .then(function (response) {
        vm.recipes = response.data.results;
        if (!response.data.results[0]) {
          vm.noResults = true;
        }
      });
    }
  }
};
</script>

<style>
  .form {
    width: 400px;
    margin-top: 20px;
  }
  .center {
    margin-top: 40px;
    text-align: center;
  }
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    transition: opacity 1s;
  }
  .fade-leave {
  }
  .fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }
</style>
