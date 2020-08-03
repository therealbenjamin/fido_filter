import { RouteConfig } from 'vue-router/types/router';

export const ConnectionRoutes: RouteConfig[] = [
  {
    path: '/connection',
    name: 'connection',
    component: () =>
      import(/* webpackChunkName: "connection" */ './Connection/Connection.vue').then((m: any) => m.default),
  },
];
