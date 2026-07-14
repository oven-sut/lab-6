var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var query = q.query;
    var file1 = query.file1;
    var file2 = query.file2;
    console.log('file1 = ' + file1);
    console.log('file2 = ' + file2);
    fs.rename(file1, file2, function (err) {
        if (err) throw err;
        console.log('File Renamed!');
    });
    res.end();
}).listen(3333);
