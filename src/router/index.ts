import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/upcoming',
      name: 'upcoming',
      component: () => import('../views/movie/UpcomingView.vue')
    },
    {
      path: '/now-playing',
      name: 'now-playing',
      component: () => import('../views/movie/NowPlayingView.vue')
    },
    {
      path: '/top-rated',
      name: 'top-rated',
      component: () => import('../views/movie/TopRatedView.vue')
    },
    {
      path: '/movie/:id',
      name: 'movie-detail',
      component: () => import('../views/movie/DetailView.vue')
    },
    {
      path: '/tv',
      name: 'tv',
      component: () => import('../views/tv/IndexView.vue')
    },
    {
      path: '/tv/top-rated',
      name: 'tv-top-rated',
      component: () => import('../views/tv/TopRatedView.vue')
    },
    {
      path: '/tv/on-the-air',
      name: 'tv-on-the-air',
      component: () => import('../views/tv/OnTheAirView.vue')
    },
    {
      path: '/tv/airing-today',
      name: 'tv-airing-today',
      component: () => import('../views/tv/AiringTodayView.vue')
    },
    {
      path: '/tv/show/:id',
      name: 'tv-detail',
      component: () => import('../views/tv/DetailView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
