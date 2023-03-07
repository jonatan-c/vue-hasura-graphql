import Vue from 'vue';
import Router from 'vue-router';
import NotPageFound from './pages/NotPageFound.vue';
import Home from './pages/Home';
import List from './pages/List.vue';
import Form from './pages/Form.vue';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/agregar',
      name: 'agregar',
      component: Form,
    },
 
    {
      path: '/editar/:id',
      name: 'Editar',
      component: () => import(/* webpackChunkName: "about" */ '../src/pages/Form.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',

      component: NotPageFound
    },
  ]
});

