const proxy=require('http-proxy-middleware');
module.exports=(app)=>{
    app.use(proxy('/xboot', {
        target: 'http://47.92.27.141:8090',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
            "^/xboot": "/xboot"
        },
    }));
    app.use(proxy('/api', {
        target: 'http://localhost:3000',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
            "^/api": "/api"
        },
    }));
}
