var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var query = q.query;
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.write(req.url + '\n');
    res.write(q.pathname + '\n');
    res.write('name: ' + query.name + '\n');
    res.write('subject: ' + query.subject + '\n');
    res.write('score: ' + query.score + '\n');
    res.end();
}).listen(3333);
