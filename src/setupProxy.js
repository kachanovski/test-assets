// eslint-disable-next-line @typescript-eslint/no-var-requires
const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://5.181.108.97',
            changeOrigin: true,
        })
    );
};
