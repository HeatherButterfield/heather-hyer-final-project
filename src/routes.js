import RecipeSearch from './components/RecipeSearch.vue'
import About from './components/About.vue'
import Favorites from './components/Favorites.vue'



export const routes = [
  { path: '/', component: RecipeSearch },
  { path: '/about', component: About },
  { path: '/favorites', component: Favorites },
];
