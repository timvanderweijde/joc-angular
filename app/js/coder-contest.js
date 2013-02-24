'use strict';

var coderContest = angular.module('coderContest', []);

coderContest.config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/home',    { templateUrl: 'partials/home.html' });
    $routeProvider.when('/coders',   { templateUrl: 'partials/coders.html' });
    $routeProvider.when('/coders/:coderId',  { templateUrl: 'partials/coder.html' });
    $routeProvider.when('/about',  { templateUrl: 'partials/about.html' });

    $routeProvider.otherwise({redirectTo: '/home'});

}]);