'use strict';

coderContest.controller('VotesController', function($scope, LoadsCoders) {

  $scope.coder1;
  $scope.coder2;
  $scope.topCoders = [];

  var startNewRound = function() {

    var randomCoder = function(coders) {
      var index = Math.round(Math.random() * coders.length - 1);
      return coders[index];
    };

    LoadsCoders.load().then(function(coders) {
      $scope.topCoders = coders;
      $scope.coder1    = randomCoder($scope.topCoders);
      $scope.coder2    = randomCoder($scope.topCoders);
    });
  };

  $scope.vote = function(coder) {
    coder.vote().then(function() { startNewRound(); });
  };

  startNewRound();
});
