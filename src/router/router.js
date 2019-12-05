import Test from '../pages/test/test';
// import AsyncComponent from '../utils/asyncComponent';
// const test = AsyncComponent(()=>{import('../pages/test/test')})
const routes=[
    {
        path:'/test',
        component:Test,
        requireAuth:false,
    }
]
export default   routes
