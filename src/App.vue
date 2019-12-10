<template>
  <v-app>
  <v-content>
    <v-card>
      <v-toolbar class="light-blue white--text">

        <v-toolbar-title><h1>Recipe Search</h1></v-toolbar-title>

        <v-spacer></v-spacer>

        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <span v-on="on">
              <router-link to="/" tag="span">
                <v-btn icon>
                  <v-icon :color="white">mdi-magnify</v-icon>
                </v-btn>
              </router-link>
            </span>
          </template>
          <span>Search</span>
        </v-tooltip>

        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <span v-on="on">
              <router-link to="/favorites" tag="span">
                <v-btn icon>
                  <v-icon :color="white">mdi-heart</v-icon>
                </v-btn>
              </router-link>
            </span>
          </template>
          <span>Favorites</span>
        </v-tooltip>

        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <span v-on="on">
              <router-link to="/about" tag="span">
                <v-btn icon>
                  <v-icon :color="white">mdi-help</v-icon>
                </v-btn>
              </router-link>
            </span>
          </template>
          <span>About</span>
        </v-tooltip>

      </v-toolbar>
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
  white: "white",
  items : ["main course", "side dish", "dessert", "appetizer", "salad", "bread", "breakfast", "soup", "beverage", "sauce", "drink"]
  }),
};
</script>
