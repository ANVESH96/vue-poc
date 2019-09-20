// routes.js
import Login from './components/Login.vue';
import HelloWorld from './components/HelloWorld.vue';
import LoadSearch from './components/LoadSearch.vue';


const routes = [
    { path: '/', component: HelloWorld },
    { path: '/LoadSearch', component: LoadSearch },
    { path: '/Login', component: Login },
];

export default routes;