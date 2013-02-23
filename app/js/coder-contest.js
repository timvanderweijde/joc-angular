'use strict';

var coderContest = angular.module('coderContest', []);

coderContest.config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/home',  { templateUrl: 'partials/coders.html' });
  $routeProvider.when('/about', { templateUrl: 'partials/about.html' });

  $routeProvider.otherwise({redirectTo: '/home'});

}]);
