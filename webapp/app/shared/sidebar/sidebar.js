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

  $scope.groups = function(){
    return $scope.session.groups ? $scope.session.groups : [];
  }


  $scope.accountMenu = [
    {
      state: 'products',
      title: 'Meus Produtos',
      icon: 'local_mall'
    },
    {
      state: 'history-2',
      title: 'Histórico',
      icon: 'history-2'
    },
    {
      state: 'settings',
      title: 'Definições',
      icon: 'settings'
    }
  ];

}]).
directive('amepSidebar', ['Session', function (Session) {
  return {
    restrict: 'A',  // Forces the directive to be an attribute.
    controller: 'SidebarController',
    templateUrl: '/shared/sidebar/sidebar.html',
    scope: false
  };
}]);


