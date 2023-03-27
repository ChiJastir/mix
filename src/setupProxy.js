const {createProxyMiddleware} = require("http-proxy-middleware");
module.exports = app => {
    app.use(
        createProxyMiddleware('/v1', {
            target: 'https://api.kinopoisk.dev',
            changeOrigin: true
        }),
    )
}