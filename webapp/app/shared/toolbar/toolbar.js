angular.module('amep-toolbar', []).
controller('ToolbarController', ['$scope', 'Session', function ($scope, Session) {

}]).

directive('amepToolbar', [function () {
  return {
    restrict: 'A',  // Forces the directive to be an attribute.
    controller: 'ToolbarController',
    templateUrl: '/shared/toolbar/toolbar.html'
  };
}]);





