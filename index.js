const {server} = require('./server');
const {route} = require('./router');
const requestHandlers = require('./requestHandlers');

let handle = {};

handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;

server(route, handle);