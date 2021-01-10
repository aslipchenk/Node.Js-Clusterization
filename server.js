const http = require('http');
const url = require('url');
const pid = process.pid; // process ID
const PORT = process.env.PORT || 3000;

function server (route, handle) {
    function onRequest(req, res) {
        for (let i = 0; i < 1e7; i++) {} // this cycle was add in order to show how clusterization works
        let pathname = url.parse(req.url).pathname;
        console.log(`Request for ${pathname} received`);
        route(handle, pathname, res, req);
    }

    http.createServer(onRequest)
        .listen(parseInt(PORT), () => {
            console.log(`worker running on port ${PORT} with pid ${pid}`);
        });
}
exports.server = server;

