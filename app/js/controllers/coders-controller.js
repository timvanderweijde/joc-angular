'use strict';

coderContest.controller('CodersController', function($scope) {

  $scope.coders = [
    { id: 1, name: "Brendan Eich",  votes: 0, bio: "Creator of JavaScript"},
    { id: 2, name: "Martin Fowler", votes: 0, bio: "Inventor of Dependency Injection" },
    { id: 3, name: "Kent Beck",     votes: 0, bio: "Test Driven Guru" },
    { id: 3, name: "Steve Wozniak", votes: 0, bio: "Uebergeek" }
  ];

  $scope.vote = function(coder) {
    coder.votes += 1;
  };

});
