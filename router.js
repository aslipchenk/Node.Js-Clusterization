function route (handle, pathname, response, request) {
    console.log('About route to req for ' + pathname);
    if (typeof handle[pathname] === "function") {
         handle[pathname](response, request);
    } else {
        console.log("No request handlers found for " + pathname);
        response.writeHead(404, {
            "Content-Type": 404,
        })
        response.write('404 NOT FOUND');
        response.end();
    }
}

exports.route = route;