import Home from '../views/pages/home.js';
import Favorite from '../views/pages/favorite.js';
import Detail from '../views/pages/detail.js';

const routes = {
  '/': Home, // default page
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
