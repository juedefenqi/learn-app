import AsyncComponent from '../utils/asyncComponent';
const Test= AsyncComponent(()=>import('../pages/test'))
const testRouter=[
    {
        path:'/test',
        component:Test,
        requireAuth:false,
    }
]
export default   testRouter
