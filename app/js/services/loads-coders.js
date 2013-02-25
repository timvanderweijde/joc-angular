'use strict';

coderContest.service('LoadsCoders', function($http, Coder) {

  var createCoder = function(data) {
    return new Coder(
      data.id,
      data.name,
      data.description,
      data.votes,
      data.wikipedia);
  }

  this.load = function() {
    return $http.get('/coders').then(function(response) {

      return response.data.map(function(data) {
        return createCoder(data);
      });

    });
  };

});
