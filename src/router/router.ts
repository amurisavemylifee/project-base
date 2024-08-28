import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import routes from './routes';

export const router = createRouter({
  history: createWebHistory(),
  routes: routes as unknown as RouteRecordRaw[],
});
