import AsyncComponent from '../utils/asyncComponent';
const Login= AsyncComponent(()=>import('../pages/login'))
const privateRoutes=[
    {
        path:'/login',
        component:Login,
        requireAuth:false,
    }
]
export default  privateRoutes
