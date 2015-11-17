angular.module('amep-sidebar', []).
controller('SidebarController', ['$scope', 'Session', '$mdSidenav', function ($scope, Session, $mdSidenav) {
  $scope.$mdSidenav = $mdSidenav;
  $scope.session = false;

  Session.get(function (data) {
    $scope.session = data; // Session exists , we are logged in :)
  })

  $scope.quickMenu = [
    {
      state: 'agenda',
      title: 'Agenda',
      icon: 'event'
    }
  ];

  $scope.groups = [
    {title: 'AMEP Porto'},
    {title: 'Amigos de Aveiro'}
  ];


  $scope.accountMenu = [
    {
      state: 'products',
      title: 'Meus Produtos',
      icon: 'local_mall'
    },
    {
      state: 'settings',
      title: 'Definições',
      icon: 'settings'
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


