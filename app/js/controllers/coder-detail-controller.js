'use strict';

coderContest.controller('CoderDetailController', function($scope, $http, $routeParams) {

  var coderId = $routeParams.coderId;

  $scope.coder = $http.get('/coders/' + coderId).then(function(response) {
    return response.data;
  });

});

