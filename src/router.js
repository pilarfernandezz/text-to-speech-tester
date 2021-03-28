import { createRouter, createWebHistory } from 'vue-router';

import MainPage from './pages/MainPage.vue';
import ImplementationsSamplesPage from './pages/ImplementationsSamplesPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/apis' },
    { path: '/apis', component: MainPage },
    { path: '/implementation', component: ImplementationsSamplesPage }
  ]
});

export default router;
