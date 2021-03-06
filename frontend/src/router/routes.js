
const routes = [
  {
    path: '/',
    component: () => import('layouts/main-layout/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/main-page/IndexPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
