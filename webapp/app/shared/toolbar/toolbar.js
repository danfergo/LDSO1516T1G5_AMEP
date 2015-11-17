angular.module('amep-toolbar', []).
controller('ToolbarController', ['$scope', 'Session', function ($scope, Session) {
  $scope.session;

  Session.get(function (data) {
    if (data.id) {
      $scope.session = data; // Session exists , we are logged in :)
    }
    else {
      $scope.session = false;
    }
  })

}]).

directive('amepToolbar', [function () {
  /** function link(scope) {

    scope.$watch(function () {
      return Session.getSessionInCache();
    }, function (value) {
      if (value && value[0] == 200) { // resolved
        $('body').removeClass('no-sidenav-left');
      } else { //rejected
        $('body').addClass('no-sidenav-left');
        scope.$mdSidenav('left').close();
      }
    });
  }
   **/
  return {
    restrict: 'A',  // Forces the directive to be an attribute.
    //  link: link,
    controller: 'ToolbarController',
    templateUrl: '/shared/toolbar/toolbar.html'
  };
}]);





