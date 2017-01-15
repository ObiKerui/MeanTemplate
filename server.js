var express = require('express');
var proxyMiddleware = require('http-proxy-middleware');
var path = require('path');
var logger = require('morgan');
var config = require('./config');
var app = express();
 
app.use(logger('dev'));

var proxy = proxyMiddleware('/api', {
  target: 'https://restapi.com', // here we can specify a rest backend for api calls
  changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
  secure: true
});

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, Accept, Origin, Referer, User-Agent, Content-Type, Authorization');

    if ('OPTIONS' == req.method) {
      res.send(200);
    } else {
      next();
    }
};

app.use(express.static('public'));
app.use(allowCrossDomain);
app.use('/api', proxy);

// If no route is matched by now, it must be a 404
app.use(function(req, res, next) {
  var err = new Error('Not Found: ' + req.url);
  err.status = 404;
  next(err);
});
 
// Start the server
app.set('port', config.PORT);
var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
  console.log('environment: ' + app.get('env'));
});