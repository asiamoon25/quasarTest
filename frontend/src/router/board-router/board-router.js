
export default [
    {
      path: '/board',
      component: () => import('../../layouts/board-layout/BoardLayout.vue'),
      children: [
        {
          path: '',
          component: ()=> import('../../pages/board-page/BoardPage'),
        },
        {
          path:':category',
          component: () => import('../../pages/board-page/BoardPage')
        }
      ]
    }
  ]
