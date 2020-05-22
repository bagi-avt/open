const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
    app.use(
        "/api",
        createProxyMiddleware({
            target: "https://open-tool-hackathon.herokuapp.com",
            changeOrigin: true,
        })
    );
};
