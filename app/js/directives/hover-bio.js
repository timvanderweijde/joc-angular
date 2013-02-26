'use strict';

coderContest.directive('hoverBio', [function() {

  return {
    restrict: 'AE',
    replace: true,
    transclude: true,
    scope: {
      coder: '='
    },
    template: '<span ng-transclude></span>',
    link: function(scope, element, attrs) {

      // Register the Bootstrap popever on the current element.
      element.popover({
        title: scope.coder.name,
        content: scope.coder.description,
        trigger: 'hover',
        animation: true
      });

    }
  };

}]);
