import AsyncComponent from '../utils/asyncComponent';
const Login= AsyncComponent(()=>import('../pages/login'));
const Home= AsyncComponent(()=>import('../pages/home'))
const commonRoutes=[
    {
        path:'/login',
        component:Login,
        requireAuth:false,
    },
    {
        path:'/',
        component:Home,
        requireAuth:false,
        exact: true,
    }
]
export default  commonRoutes
