import { lazy } from 'react';

const routesConfig = [
  {
    path: '/',
    component: lazy(() => import('../pages/Home')),
    exact: true,
  },
  // {
  // path: '/about',
  // component: lazy(() => import('./pages/About')),
  // },
  // 更多路由...
];

export default routesConfig;
