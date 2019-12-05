import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.less';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom'//, Link
import {ConfigProvider }from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
//路由模式
// ReactJS 的5种路由模式
// 我们一直在使用的路由方式是BrowserRouter，也就是浏览器的路由方式，其实React还有几种路由方式：
// 1、BrowserRouter：浏览器的路由方式，也就是在开发中最常使用的路由方式
// 2、HashRouter：在路径前加入#号成为一个哈希值，Hash模式的好处是，再也不会因为我们刷新而找不到我们的对应路径
// 3、MemoryRouter：不存储history，所有路由过程保存在内存里，不能进行前进后退，因为地址栏没有发生任何变化
// 4、NativeRouter：经常配合ReactNative使用，多用于移动端
// 5、StaticRouter：设置静态路由，需要和后台服务器配合设置，比如设置服务端渲染时使用
//     BrowserRouter.propTypes = {//路由
//     basename: PropTypes.string,
//     children: PropTypes.node,
//     forceRefresh: PropTypes.bool,
//     getUserConfirmation: PropTypes.func,
//     keyLength: PropTypes.number
// };
//basename: string     所有位置的基准 URL。如果你的应用程序部署在服务器的子目录，则需要将其设置为子目录。basename 的正确格式是前面有一个前导斜杠，但不能有尾部斜杠。
//forceRefresh: bool   如果为 true ，在导航的过程中整个页面将会刷新。一般情况下，只有在不支持 HTML5 history API 的浏览器中使用此功能。
//在browserHistory     模式下，URL 是指向真实 URL 的资源路径，当通过真实 URL 访问网站的时候，由于路径是指向服务器的真实路径，但该路径下并没有相关资源，所以用户访问的资源不存在
//getUserConfirmation: func 用于确认导航的函数，默认使用 window.confirm。例如，当从 /a 导航至 /b 时，会使用默认的 confirm 函数弹出一个提示，用户点击确定后才进行导航，否则不做任何处理。译注：需要配合 <Prompt> 一起使用。
//keyLength: number    location.key 的长度，默认为 6。
//children: node       要呈现的单个子元素（组件）
ReactDOM.render(
    <ConfigProvider locale={zhCN} autoInsertSpaceInButton='false'>
        <Router basename={'/'}>
            <Route path={`/`} component={App}/>
        </Router>
    </ConfigProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
