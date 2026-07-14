var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var query = q.query;
    if (q.pathname !== '/hello.htm' || query.name === undefined) {
        res.end();
        return;
    }
    var output = 'name: ' + query.name + '\n' +
                 'subject: ' + query.subject + '\n' +
                 'score: ' + query.score + '\n';
    fs.writeFile('hello.htm', output, function (err) {
        if (err) throw err;
    });
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.write(output);
    res.end();
}).listen(3333);
