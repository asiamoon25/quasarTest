
export default [
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('layouts/admin-layout/AdminLayout'),
    children: [
      {
        path: '',
        component: () => import('pages/admin-page/admin-main-page/AdminMainPage'),
      },
      {
        path: 'content/:subCate',
        component: () => import('pages/admin-page/admin-board/AdminBoardPage'),
      },
      {
        path: 'chart',
        component: () => import('pages/admin-page/admin-chart-page/AdminChartPage')
      }
    ]
  }
]

