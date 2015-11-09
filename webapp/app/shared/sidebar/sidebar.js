angular.module('amep-sidebar', []).
controller('SidebarController', ['$scope', 'Session', '$mdSidenav', function ($scope, Session, $mdSidenav) {
  $scope.$mdSidenav = $mdSidenav;
  $scope.session = false;

  Session.get(function (data) {
    $scope.session = data; // Session exists , we are logged in :)
  })

  $scope.menu = [
    {
      state: 'agenda',
      title: 'Agenda',
      icon: 'unknown'
    },
    {
      state: 'products',
      title: 'Meus Produtos',
      icon: 'unknown'
    }
  ];

}]).
directive('amepSidebar', ['Session', '$rootScope', function (Session) {
  function link(scope) {

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

  return {
    restrict: 'A',  // Forces the directive to be an attribute.
    link: link,
    controller: 'SidebarController',
    templateUrl: '/shared/sidebar/sidebar.html'
  };
}]);


