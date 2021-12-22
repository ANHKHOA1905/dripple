import Home from "./pages/Home.vue";
import Comment from "./pages/Comment.vue";
import Content from "./pages/Content.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/comment",
    component: Comment,
  },
  {
    path: "/content",
    component: Content,
  },
];

export default routes;
