var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    var urlObj = url.parse(req.url, true);
    var data = urlObj.query;
    if (urlObj.pathname != "/hello.htm" || data.file1 == undefined) {
        return res.end();
    }
    console.log("file1 = " + data.file1);
    console.log("file2 = " + data.file2);
    fs.rename(data.file1, data.file2, function (err) {
        if (err) {
            console.log(err.message);
        } else {
            console.log("File Renamed!");
        }
    });
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end();
}).listen(3333);
console.log("http://localhost:3333");
