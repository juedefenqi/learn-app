import AsyncComponent from '../utils/asyncComponent';
const Login= AsyncComponent(()=>import('../pages/login'));
const Home= AsyncComponent(()=>import('../pages/home'))
const commonRoutes=[
    {
        path:'/',
        component:Home,
        requireAuth:true,
        exact: true,
    } ,
    {
        path:'/login',
        component:Login,
        requireAuth:false,
    }
]
export default  commonRoutes
