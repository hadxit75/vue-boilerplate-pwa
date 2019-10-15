
import Home from "src/components/GeneralViews/Home.vue";
import NotFound from "src/components/GeneralViews/NotFoundPage.vue";


let mainPage = {
  path: "/",
  name: "Home",
  component: Home,
  meta: {
    requiresAuth: false
  }
};

const routes = [
  mainPage,
  { path: "*", component: NotFound }
];

export default routes;
