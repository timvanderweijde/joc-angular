'use strict';

var coderContest = angular.module('coderContest', ['ngResource']);

coderContest.config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/home',    { templateUrl: 'partials/home.html' });
  $routeProvider.when('/about',   { templateUrl: 'partials/about.html' });
  $routeProvider.when('/coders',  { templateUrl: 'partials/coders.html' });

  $routeProvider.otherwise({redirectTo: '/home'});

}]);
