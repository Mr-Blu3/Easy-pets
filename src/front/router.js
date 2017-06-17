import FrontComponent from './components/front/front.component.vue'
export default
{
  path: '/',
  component: FrontComponent,
  name: 'front',
  children: [
    {
      path: 'test',
      component: FrontComponent
    }
  ]
}
