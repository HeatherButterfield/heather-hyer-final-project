import MainCourse from './components/MainCourse.vue'
import SideDish from './components/SideDish.vue'
import Dessert from './components/Dessert.vue'
import All from './components/All.vue'


export const routes = [
  { path: '/', component: All },
  { path: '/maincourse', component: MainCourse },
  { path: '/sidedish', component: SideDish },
  { path: '/dessert', component: Dessert },


];
