'use strict';

coderContest.controller('VotesController', function($scope, LoadsCoders) {

  $scope.topCoders = LoadsCoders.load();

});
