import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes';



Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({routes});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');



// // main.js

// import Vue from 'vue';
// import App from './App.vue';
// import VueRouter from 'vue-router';

// import routes from './routes';

// Vue.config.productionTip = false;

// Vue.use(VueRouter);

// new Vue({
//   render: h => h(App),
//   routes
// }).$mount('#app');