import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import store from './store/store';
import FormComponent from './components/FormComponent.vue';
import ResponsePage from './components/ResponsePage.vue';

const routes = [
    { path: '/', redirect: '/form' }, // Redirect from the root path to /form
    { path: '/form', component: FormComponent },
    { path: '/response', name: 'response', component: ResponsePage },
  ];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(store);

app.use(router);
app.mount('#app');

