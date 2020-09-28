const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {

    app.use(
        'api/Project/createProject',
        createProxyMiddleware({
            target: 'http://ts-project-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/',
            changeOrigin: true,
        })
    )
}