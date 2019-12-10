<template>
  <v-container>
    <v-card
      class="mx-auto"
      max-width="344"
      v-shadow
    >

      <v-img
        :src="'https://spoonacular.com/recipeImages/' + recipe.image"
        height="200px"
      ></v-img>

      <v-card-title>
        {{ recipe.title }}
      </v-card-title>

      <v-card-actions>

        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon @click="favorite" :color="color">mdi-heart</v-icon>
        </v-btn>

      </v-card-actions>

      <v-card-actions>

      <v-btn text>
        Ingredients
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="getIngredients"
      >
        <v-icon>{{ showi ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="showi">
        <v-divider></v-divider>

        <v-card-text>
          <ul v-for="ingredient in ingredients" v-bind:key="ingredient.name">
            <li>{{ ingredient.originalString }}</li>
          </ul>
        </v-card-text>
      </div>
    </v-expand-transition>

    <v-card-actions>

    <v-btn text>
      Directions
    </v-btn>

    <v-spacer></v-spacer>

    <v-btn
      icon
      @click="getDirections"
    >
      <v-icon>{{ showd ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
    </v-btn>
  </v-card-actions>

  <v-expand-transition>
    <div v-show="showd">
      <v-divider></v-divider>

      <v-card-text>
        <p>{{ directions }}</p>
      </v-card-text>
    </div>
  </v-expand-transition>


    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  components: {
  },
  props: ["recipe", "isfavorite"],
  data: () => ({
    showi: false,
    showd: false,
    ingredients: [],
    directions: '',
    color: "grey"
  }),
  created: function() {
    if (this.isfavorite) {
      this.color = "red";
    }
  },
  methods: {
    favorite() {
      if (this.color == "grey") {
        this.isfavorite = true;
        this.color = "red";
        this.$store.state.favorites.push(this.recipe.id);
      }
      else {
        this.isfavorite = false;
        this.color = "grey";
        this.$store.state.favorites = this.$store.state.favorites.filter(function(e) { return e !== this.recipe.id })
      }
    },
    getIngredients() {
      this.showi = !this.showi;
      let vm = this;
      let url = "https://webknox-recipes.p.rapidapi.com/recipes/" + vm.recipe.id + "/information";
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
          vm.ingredients = response.data.extendedIngredients;
        });
    },
    getDirections() {
      this.showd = !this.showd;
      let vm = this;
      let url = "https://webknox-recipes.p.rapidapi.com/recipes/" + vm.recipe.id + "/information";
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
          vm.directions = response.data.instructions;
        });
    }
  }
};
</script>
