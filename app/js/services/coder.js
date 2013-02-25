'use strict';

coderContest.factory('Coder', function($http) {

  var Coder = function(id, name, description, votes, wikipedia) {
    this.id          = id;
    this.name        = name;
    this.description = description;
    this.votes       = votes;
    this.wikipedia   = wikipedia;
  };

  Coder.prototype.vote = function() {
    this.votes =
      $http
        .put('/coders/' + this.id + '/vote')
        .then(function(response) {
          return response.data;
        });
  };

  return Coder;

});
