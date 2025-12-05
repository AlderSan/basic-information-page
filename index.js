const fs = require('fs');
const url = require('url');
const http = require('node:http');

const server = http.createServer(function(req, res){
//server code goes here
//need to get URL and store as variable
    const currentURL = url.parse(req.url);
    currentURL = currentURL.pathname === '/' ? currentURL.pathname = '/index.html' : currentURL;
    let fileName = '.' + currentURL.pathname;
//need to verify if there is an error or unknown URL to return 404.html
//check URL to set webpages
//blank will load index.html
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/html" }); //return 404 error
            res.write("404.html");
            return res.end();
        } else {
            res.writeHead(200, { "Content-Type": "text/html" }) //return success
            res.write(data);
            return res.end();
        }
    })

//need to read the appropriate file based on URL
//filename from URL 
//blank needs to load index
//unknown needs to load 404

});

server.listen(8000);