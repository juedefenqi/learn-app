import React,{Component} from 'react';
import { BrowserRouter as Router, Switch   } from "react-router-dom";
import renderRoutes from './utils/renderRoutes';
import routes from './router/router';
import './api/mock/data';
import './App.css';
class App extends Component{
     render() {
         const authPath='/login';// 默认未登录的时候返回的页面，可以自行设置
         const authed=true;//this.props.state.authed||localStorage.getItem('authed')|| 如果登陆之后可以利用redux修改该值
         return(
             <div className="page display_flex">
                 <Router basename={'/'}>
                     <Switch>
                         {renderRoutes(routes,authed,authPath)}
                     </Switch>
                 </Router>
             </div>
         )
     }
}
export default App;
