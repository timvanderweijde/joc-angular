'use strict';

coderContest.service('LoadsCoders', function($http) {

  this.load = function() {
    return $http.get('/coders').then(function(response) {
      return response.data;
    });
  };

});
