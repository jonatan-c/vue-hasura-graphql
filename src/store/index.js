import Vue from 'vue';
import Vuex from 'vuex';

import peliculasStore from './peliculas.module';

Vue.use(Vuex);


const store = new Vuex.Store({
  modules: {
    peliculasStore
  }
});

export default store;