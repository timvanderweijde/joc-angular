'use strict';

coderContest.directive('coder', [function() {

  return {
    restrict: 'E',
  replace: true,
    template: '<div class="coder well well-large"><h3>{{ coder.name }}</h3><p>{{ coder.description }}</p></div>',
    scope: {
      coder: '=',
      vote: '&'
    },
    link: function(scope, element, attrs) {

      // This is what you need to write instead of using a ng-click directive.
      element.bind('click', function() {
        scope.$apply(function() {
          scope.vote();
        });
      });

    }
  };

}]);
