import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Register New Hero',
    component: () => import('../components/pages/register-hero/RegisterHeroComponent.vue'),
  },
  {
    path: '/edit-hero/:id',
    name: 'Update Hero',
    component: () => import('../components/pages/edit-hero/EditHeroComponent.vue'),
  },
  {
    path: '/list-hero',
    name: 'List Heroes',
    component: () => import('../components/pages/list-hero/ListHeroComponent.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeResolve((to, from, next) => {
  if (to.name) {
    // Carregamento de tela com NProgress
    NProgress.start();
  }
  next();
});

router.afterEach((to, from) => {
  //  Completando a animação da rota NProgress
  NProgress.done();
});

export default router;
