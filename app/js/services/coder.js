'use strict';

coderContest.factory('Coder', function() {

  var Coder = function(id, name, description, votes, wikipedia) {
    this.id          = id;
    this.name        = name;
    this.description = description;
    this.votes       = votes;
    this.wikipedia   = wikipedia;
  };

  return Coder;

});
