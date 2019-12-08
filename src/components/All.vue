<template>
  <div>
    <h2 class="center">All Recipes</h2>
    <RecipeSearch :type="type"></RecipeSearch>
  </div>
</template>

<style>
  .center {
    margin-top: 40px;
    text-align: center;
  }
</style>

<script>
import RecipeSearch from './RecipeSearch';

export default {
  name: 'App',
  components: {
    RecipeSearch,
  },
  data: () => ({
    type: "",
  }),
};
</script>
