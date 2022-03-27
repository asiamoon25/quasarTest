
export default [
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('layouts/admin/AdminLayout'),
    children: [
      {
        path:'',
        component: () => import('layouts/admin/AdminLayout')
      }
    ]
  }
]

