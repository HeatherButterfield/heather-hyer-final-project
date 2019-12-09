<template>
  <v-app>
  <v-content>
    <v-card class="light-blue">
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold display-3 white--text">Recipe Search</h1>
    </v-card-title>

    <v-tabs
      background-color="transparent"
      grow
    >
      <v-tab><router-link to="/" tag="p" class="white--text">All</router-link></v-tab>
      <v-tab><router-link to="/maincourse" tag="p" class="white--text">Main Course</router-link></v-tab>
      <v-tab><router-link to="/sidedish" tag="p" class="white--text">Side Dish</router-link></v-tab>
      <v-tab><router-link to="/dessert" tag="p" class="white--text">Dessert</router-link></v-tab>

    </v-tabs>
  </v-card>
    <router-view></router-view>
  </v-content>
  </v-app>
</template>

<style>
  .link {
    text-decoration: none;
  }
</style>

<script>

export default {
  name: 'App',
  components: {

  },
  data: () => ({
  items : ["main course", "side dish", "dessert", "appetizer", "salad", "bread", "breakfast", "soup", "beverage", "sauce", "drink"]
  }),
};
</script>
