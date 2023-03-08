import Vue from "vue";
import App from "./App.vue";
import VueApollo from "vue-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import store from "./store";
import { router } from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// require('dotenv').config()

import locale from "element-ui/lib/locale/lang/en";

// Create an http link:
const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: 'https://generous-duck-11.hasura.app/v1/graphql',
  headers: {
    "x-hasura-admin-secret":  'gzwf2szB5OShn1FKbj4qY5nNcYT7ug3AC5zlfCeGeh1CZzyA90hGv61IMv6eZehr'
  },
});

// Create the apollo client
export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

// Install the vue plugin
Vue.use(VueApollo);

Vue.use(ElementUI, { locale });

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  apolloProvider,
  render: (h) => h(App),
}).$mount("#app");
