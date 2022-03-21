
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      
    ]
  },
  {
    path: '/board',
    component: () => import('layouts/board/BoardLayout.vue'),
    children: [
      {
        path: '',
        component: ()=> import('pages/board/Board.vue'),
        
      },
      {
        path: ':category',
        component: () => import('pages/board/Board.vue')
      }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
