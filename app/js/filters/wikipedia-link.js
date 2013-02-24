'use strict';

coderContest.filter('wikipediaLink', function() {
  return function(slug) {
    return 'http://www.wikipedia.org/wiki/' + slug;
  }
});
