'use strict';

coderContest.controller('CodersController', function($scope, $http, LoadsCoders) {

  $scope.coders = LoadsCoders.load();

  $scope.vote = function(coder) {
    $http
      .put('/coders/' + coder.id + '/vote')
      .then(function(response) {
        coder.votes = response.data;
      });
  };

});
