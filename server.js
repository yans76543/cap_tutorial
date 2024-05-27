var http = require("http");
var url = require("url");
var fs = require("fs");
var querystring = require("querystring")

http.createServer( (request, response) => {
    console.log('----- log start ----');

    var pathname = url.parse(request.url).pathname; 
    console.log("Request for "+ pathname +" received.");

    if(pathname == '/favicon.ico'){
        return response.writeHead(404);
      }

    var parsedUrl = url.parse(request.url);
    console.log('parseUrl');
    console.log(parsedUrl);
    
    var parsedQuery = url.parse(request.url,true).query;
    //var parsedQuery = querystring.parse(parsedUrl.query,'&','=');
    console.log(parsedQuery);

    console.log('---- log end ----');

    const body = 'hello world2';
    response
        .writeHead(200, {
            'Content-Length': Buffer.byteLength(body),
            'Content-Type': 'text/plain',
        })
        .end(body);
}).listen(8081,() => {
    console.log('Server is running..');
});