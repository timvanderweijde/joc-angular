'use strict';

coderContest.controller('CoderDetailController', function($scope, $routeParams) {

    $scope.coderId = $routeParams.coderId;

    $scope.coders = [
        { id: 1, name: "Brendan Eich",   votes: 0, bio: "Creator of JavaScript"},
        { id: 2, name: "Martin Fowler", votes: 0, bio: "Inventor of Dependency Injection" },
        { id: 3, name: "Kent Beck",     votes: 0, bio: "Test Driven Guru" },
        { id: 3, name: "Steve Wozniak", votes: 0, bio: "Uebergeek" }
    ];

    $scope.coder = findCoder($scope.coderId, $scope.coders);

});

function findCoder(coderId, coders) {
    for (var i = 0; i < coders.length; i++) {
        if (coders[i].id == coderId) {
            return coders[i];
        }
    }
}