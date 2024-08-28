import { AppRouteRecord } from '../types';

import PageMain from '@/pages/PageMain.vue';

export default [
  {
    path: '/',
    name: 'root',
    component: PageMain,
  },
] as const satisfies readonly AppRouteRecord[];
