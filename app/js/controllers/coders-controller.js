'use strict';

coderContest.controller('CodersController', function($scope, $http) {

  $scope.participants = 42;

  $scope.coders = $http.get('/coders').then(function(response) {
    return response.data;
  });

  $scope.vote = function(coder) {
    $http
      .put('/coders/' + coder.id + '/vote')
      .then(function(response) {
        coder.votes = response.data.votes;
      });
  };

});
