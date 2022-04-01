
export default [
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('layouts/admin/AdminLayout'),
    children: [
       {
         path: '',
         component: () => import('pages/admin/AdminDefaultPage'),
       },
      {
        path: 'content/:subCate',
        component: () => import('pages/admin/content/Content'),
      }
    ]
  }
]

