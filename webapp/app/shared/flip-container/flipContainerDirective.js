angular.module('flipCard', []).
directive('flipCard', [function () {
  function link(scope, element, attrs) {
    element.bind('click', function () {
      element.toggleClass('hover');
    })
  }

  return {
    link: link,
    restrict: 'A',  // Forces the directive to be an attribute.
    scope: false
  };
}]);


