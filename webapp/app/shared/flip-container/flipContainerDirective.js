angular.module('flipCard', []).
directive('flipCard', ['$timeout', '$window', function ($timeout, $window) {
  function link(scope, element, attrs) {
    element.bind('click', function () {
      if (!element.hasClass('hover') && !element.hasClass('locked'))
        element.toggleClass('hover');
    })

    element.find('.toggle').bind('click', function () {
      element.toggleClass('hover');
      return false; // prevents propagation to parent
    })

    function resize(e) {
      var e = angular.element(element);
      var front = e.find('.front');
      var back = e.find('.back');
      var max = front.height() < back.height() ? back.height() : front.height();
      front.css('height', max);
      back.css('height', max);
      e.css('height', max);
    }

    element.css('visibility','hidden');
    $timeout(function () { //dom ready
      element.css('visibility','visible');
      resize(element);
    })

    angular.element($window).resize(function () {
      element.children().each(function () {
        resize(element);
      })
    })
  }


  return {
    link: link,
    restrict: 'A',  // Forces the directive to be an attribute.
    scope: false
  };
}]);
