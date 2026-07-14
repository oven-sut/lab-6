var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    var urlObj = url.parse(req.url, true);
    var data = urlObj.query;
    if (urlObj.pathname != "/hello.htm" || data.name == undefined) {
        return res.end();
    }
    var txt = "name: " + data.name + "<br>" +
              "subject: " + data.subject + "<br>" +
              "score: " + data.score + "<br>";
    fs.writeFile("hello.htm", txt, function (err) {
        if (err) throw err;
        console.log("Saved!");
    });
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(txt);
    res.end();
}).listen(3333);
console.log("http://localhost:3333");
