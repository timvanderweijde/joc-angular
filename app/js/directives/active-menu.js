'use strict';

coderContest.directive('activeMenu', ['$location', function(location) {

    return {
        restrict: 'A',
        replace: true,
        link: function(scope, element, attrs) {
            var path = attrs.href;
            path = path.substring(1); //hack because path does not return including hashbang
            scope.location = location;
            scope.$watch('location.path()', function(newPath) {
                if (path === newPath) {
                    element.parent().addClass("active");
                } else {
                    element.parent().removeClass("active");
                }
            });
        }
    };

}]);