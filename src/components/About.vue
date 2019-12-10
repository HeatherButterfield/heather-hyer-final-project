<template>
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
        <h2 class="center">About</h2><hr><br>
        <p>The WebKnox Recipe API allows you to access over 330,000 recipes. It allows users to search for recipes using natural language such as "gluten free brownies without sugar". Furthermore, several widgets to visualize ingredient lists, price breakdowns, This Food API also contains thousands of information bits about ingredients such as nutrition, prices, tips, and more.</p>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<style>
  p {
    text-align: center;
    width: 400px;
  }
</style>

<script>

export default {
  name: 'App',
  components: {
  },
  data: () => ({
  }),
};
</script>
