import React from 'react';
import {Route,Redirect,Switch} from 'react-router-dom';
const renderRouters=(routes,authed,authPath='/login',extraProps={},switchProps={})=>routes?(
        <Switch {...switchProps}>
            {routes.map((route,i)=>(
                   <Route
                       key={route.key||i}
                       path={route.path}
                       exact={route.exact}
                       strict={route.strict}
                       render={(props)=>{
                           //如果是不需要权限 或者 已登录 或者 访问路径是/login，则直接返回当前组件
                           if(!route.requireAuth||authed||route.path===authPath){
                               return <route.component {...props} {...extraProps} route={route}/>
                           }
                           //anthPath 重定向路径
                              return <Redirect to={{pathname:authPath,state:{from:props.location}}}></Redirect>
                       }}
                   >
                   </Route>
                ))}
        </Switch>

):null;
export default renderRouters
