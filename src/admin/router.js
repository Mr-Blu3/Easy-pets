import InitAdminComponent from './components/init.admin.component'
import TestAdminComponent from './components/test.admin.component'
export default
{
  path: '/admin',
  name: 'admin',
  abstract: 'true',
  component: InitAdminComponent,
  children: [
    {
      abstract: 'true',
      path: '/admin/test',
      component: TestAdminComponent
    }
  ]
}
