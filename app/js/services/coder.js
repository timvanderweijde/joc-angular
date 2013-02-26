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
    var that = this;
    return $http
        .put('/coders/' + this.id + '/vote')
        .then(function(response) {
          that.votes = response.data;
        });
  };

  return Coder;

});
