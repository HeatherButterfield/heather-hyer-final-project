<template>
  <v-app>
    <RecipeResults :recipes="recipes"/>
  </v-app>
</template>

<script>
import RecipeResults from './components/RecipeResults';
import { recipes } from './assets/recipes'

export default {
  name: 'App',
  components: {
    RecipeResults,
  },
  data: () => ({
    recipes
  }),
};
</script>
