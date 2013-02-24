var sys     = require('sys');
var express = require('express');
var server     = express();

// Get port from Heroku environment
var port = process.env.PORT || 9001;

sys.log('Starting CoderContest API...');

// Add CSRF support, allow all OPTION requests from every origin.
allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    if ('OPTIONS' == req.method) {
      res.send(200);
    } else {
      next();
    }
};
server.configure(function() {
  server.use(allowCrossDomain);
  server.use(express.bodyParser());
  server.use(express.methodOverride());
  server.use(server.router);
  server.use(express.static(__dirname + '/../app/'));
});

// Load the CoderContest API routes!
var coderContestRoutes = require('./codercontest-routes');
var router = {
  '/coders':     { get: coderContestRoutes.coders },
  '/coders/:id': {
    get: coderContestRoutes.coder,
    'delete': coderContestRoutes.removeCoder,
    post: coderContestRoutes.ngResourceVote
  },
  '/coders/:id/vote': {
    put: coderContestRoutes.httpVote
  }
};
sys.log('Loaded routes...');

// Add the routes to the application.
Object.keys(router).forEach(function(route) {
  var routes = router[route];
  Object.keys(routes).forEach(function(method) {
    server[method](route, routes[method]);
  });
});

// Start the application.
server.listen(port);

sys.log('CoderContest API is now listening at port ' + port + '...\n\n');
setTimeout(function() {
  sys.log('IT\'S OVER NINE THOUSAND!!!')
}, 10000);

