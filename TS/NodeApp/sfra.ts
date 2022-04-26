var server = require('server');

server.get('ShowNew', function (req, res, next) {
    res.json({value: 'Hello World'});
    next();
});

server.post('Post1New', server.middleware.http, (req, res, next) => {
    next()
});

server.post('Post2New', server.middleware.https, function (req, res, next) {
    next();
});

server.use('', function (req, res, next) {
    next();
});

server.get('');

module.exports = server.exports();