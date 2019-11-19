<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col v-for="recipe in recipes" v-bind:key="recipe.id">
          <RecipeCard :recipe="recipe"/>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import RecipeCard from './RecipeCard';

export default {
  components: {
    RecipeCard,
  },
  props: ["recipes"],
  data: () => ({

  }),
  methods: {

  }
};
</script>
