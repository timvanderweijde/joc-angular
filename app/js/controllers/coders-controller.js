'use strict';

coderContest.controller('CodersController', function($scope) {

  $scope.coders = [
    { name: "Martin Eich",   votes: 0 },
    { name: "Martin Fowler", votes: 0 },
    { name: "Kent Beck",     votes: 0 },
    { name: "Steve Wozniak", votes: 0 }
  ];

  $scope.vote = function(coder) {
    var index = $scope.coders.indexOf(coder);
    $scope.coders[index].votes += 1;
  };

});
