import AsyncComponent from '../utils/asyncComponent';
const Login= AsyncComponent(()=>import('../pages/login'))
const commonRoutes=[
    {
        path:'/login',
        component:Login,
        requireAuth:false,
    }
]
export default  commonRoutes
