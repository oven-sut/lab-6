var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var urlObj = url.parse(req.url, true);
    var data = urlObj.query;
    res.write(req.url + "<br>");
    res.write(urlObj.pathname + "<br>");
    res.write("name: " + data.name + "<br>");
    res.write("subject: " + data.subject + "<br>");
    res.write("score: " + data.score + "<br>");
    res.end();
}).listen(3333);
console.log("http://localhost:3333");
