//axios 封装 拦截器
import axios from 'axios';
import config from './baseUrl';
export  const service=axios.create(config);
// 统一请求路径前缀
let base = '';
service.interceptors.request.use((config)=> {
    // Tip: 1
    // 请求开始的时候可以结合redux开启全屏的 loading 动画
    // Tip: 2
    // 带上 token , 可以结合 redux 或者重 localStorage
    // if (store.getters.token) {
    //     config.headers['X-Token'] = getToken() // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
    // } else {
    //     // 重定向到登录页面
    // }
    // Tip: 3
    // 根据请求方法，序列化传来的参数，根据后端需求是否序列化
        return config;
    }, (error) =>{
    // 请求错误时做些事(接口错误、超时等)
    // Tip: 4
    // 关闭loadding
    //  1.判断请求超时
    //  2.需要重定向到错误页面
        return Promise.reject(error);
    })
service.interceptors.response.use( (response)=> {
    let data;
    // IE9时response.data是undefined，因此需要使用response.request.responseText(Stringify后的字符串)
    if(response.data === undefined){
        data = response.request.responseText
    } else{
        data = response.data
    }
    // 根据返回的code值来做不同的处理（和后端约定）
    switch (data.code) {
        case 200:
         //   data=data.result;
            break ;
        default:
    }
    // 若不是正确的返回code，且已经登录，就抛出错误
    // const err = new Error(data.description)
    // err.data = data
    // err.response = response
    // throw err
    return data;
}, (error)=> {
    if (error && error.response) {
        switch (error.response.status) {
            case 400:
                error.message = '请求错误'
                break

            case 401:
                error.message = '未授权，请登录'
                break

            case 403:
                error.message = '拒绝访问'
                break

            case 404:
                error.message = `请求地址出错: ${error.response.config.url}`
                break

            case 408:
                error.message = '请求超时'
                break

            case 500:
                error.message = '服务器内部错误'
                break

            case 501:
                error.message = '服务未实现'
                break

            case 502:
                error.message = '网关错误'
                break

            case 503:
                error.message = '服务不可用'
                break

            case 504:
                error.message = '网关超时'
                break

            case 505:
                error.message = 'HTTP版本不受支持'
                break

            default:
        }
    }
    return  Promise.reject(error);
})
export  const getRequest = (url, params) => {
    let accessToken = '1c2c41e'//getStore('accessToken');
    return service({
        method: 'get',
        url: `${base}${url}`,
        params: params,
        headers: {
            'accessToken': accessToken
        }
    });
};
export const postRequest = (url, params) => {
    let accessToken = '1c2c41e'//getStore('accessToken');
    return axios({
        method: 'post',
        url: `${base}${url}`,
        data: params,
        transformRequest: [function (data) {
            let ret = '';
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
            }
            return ret;
        }],
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'accessToken': accessToken
        }
    });
};
export const postJsonRequest = (url, params) => {
    let accessToken = '1c2c41e'//getStore('accessToken');
    return axios({
        method: 'post',
        url: `${base}${url}`,
        data: params,
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'accessToken': accessToken
        }
    });
};
export const putRequest = (url, params) => {
    let accessToken = '1c2c41e'//getStore('accessToken');
    return axios({
        method: 'put',
        url: `${base}${url}`,
        data: params,
        transformRequest: [function (data) {
            let ret = '';
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
            }
            return ret;
        }],
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'accessToken': accessToken
        }
    });
};
export const deleteRequest = (url, params) => {
    let accessToken = '1c2c41e'//getStore('accessToken');
    return axios({
        method: 'delete',
        url: `${base}${url}`,
        params: params,
        headers: {
            'accessToken': accessToken
        }
    });
};
export default service
