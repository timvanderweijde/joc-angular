'use strict';

coderContest.controller('CodersController', function($scope, $http, LoadsCoders) {

  $scope.coders = LoadsCoders.load();

});
