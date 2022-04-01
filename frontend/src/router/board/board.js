
export default [
  {
    path: '/board',
    component: () => import('../../layouts/board/BoardLayout.vue'),
    children: [
      {
        path: '',
        component: ()=> import('../../pages/board/Board.vue'),

      },
      {
        path: ':category-manage',
        component: () => import('../../pages/board/Board.vue')
      }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
]

