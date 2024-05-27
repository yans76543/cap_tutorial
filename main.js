var http = require("http");
var url = require("url");
var fs = require("fs");
var dt = require("./modules/mymodule");

console.log(dt.myDateTime());
console.log(dt.yourDateTime());
const port = 8081;

http.createServer( (request, response) => {
    response.writeHead(200, {
        'Content-Type':'text/html; charset=utf-8'
    });
    response.write("Time is "+ dt.myDateTime() + "\n" );
    response.end('Hello World???');
    /*    
    var pathname = url.parse(request.url).pathname; 
    
    console.log(pathname);
    if (pathname ==""){
        pathname ="/index.html";
    }
    
    fs.readFile(pathname.substr(1), function(err,data) {
        if (err) {
            console.log(err);
            response.writeHead(404, {'Content-Type':'text/html'});
        } else {
            response.writeHead(200,{'Content-Type': 'text/html'});
            response.write(data.toString());
        }
    });
    */

}).listen(port);