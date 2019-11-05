<template>
  <v-app>
    <RecipeCard/>
  </v-app>
</template>

<script>
import RecipeCard from './components/RecipeCard';

export default {
  name: 'App',
  components: {
    RecipeCard,
  },
  data: () => ({
    //
  }),
};
</script>
