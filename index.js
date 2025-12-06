const fs = require('fs');
const url = require('url');
const http = require('node:http');
const express = require('express');
const app = express();
const PORT = 8080;

app.get(["/", "/index", "/index.html"], (req, res) => res.write(fs.readFileSync('./index.html')));
app.get(["/about", "/about.html"], (req, res) => res.write(fs.readFileSync('./about.html')));
app.get(["/contact", "/contact.html"], (req, res) => res.write(fs.readFileSync('./contact.html')));
app.get(/.*/, (req, res) => res.write(fs.readFileSync("./404.html")));


//remaking with express
app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`Express server started, listening on port ${PORT}`);
})

/* const server = http.createServer(function(req, res){
    let currentURL = url.parse(req.url);
    currentURL = currentURL.pathname === '/' ? currentURL.pathname = '/index.html' : currentURL;
    let fileName = '.' + currentURL.pathname;

    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/html" }); //return 404 error
            res.write(fs.readFileSync('./404.html'));
            return res.end();
        } else {
            res.writeHead(200, { "Content-Type": "text/html" }) //return success
            res.write(data);
            return res.end();
        }
    })

});

server.listen(8080); */