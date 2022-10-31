import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/demon-slayer',
    name: 'demon-slayer',
    component: () => import('../views/Animes/DemonSlayer.vue')
  },
  {
    path: '/dragonball-super',
    name: 'dragonball-super',
    component: () => import('../views/Animes/DragonballSuper.vue')
  },
  {
    path: '/one-piece',
    name: 'one-piece',
    component: () => import('../views/Animes/OnePiece.vue')
  },
  {
    path: '/my-hero-academia',
    name: 'my-hero-academia',
    component: () => import('../views/Animes/MyHeroAcademia.vue')
  },
  {
    path: '/ao-ashi',
    name: 'ao-ashi',
    component: () => import('../views/Animes/AoAshi.vue')
  },
  {
    path: '/bleach',
    name: 'bleach',
    component: () => import('../views/Animes/Bleach.vue')
  },
  {
    path: '/blue-lock',
    name: 'blue-lock',
    component: () => import('../views/Animes/BlueLock.vue')
  },
  {
    path: '/spy-family',
    name: 'spy-family',
    component: () => import('../views/Animes/SpyFamily.vue')
  },
  {
    path: '/calendario',
    name: 'calendario',
    component: () => import('../views/Noticias/CalendarioLan.vue')
  },
  {
    path: '/anime-awards',
    name: 'anime-awards',
    component: () => import('../views/Noticias/AnimeAwards.vue')
  },
  {
    path: '/the-angel-noticia',
    name: 'the-angel-noticia',
    component: () => import('../views/Noticias/TheAngel.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
