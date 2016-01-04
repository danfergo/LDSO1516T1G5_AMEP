angular.module('amep-sidebar', []).
controller('SidebarController', ['$scope', 'Session', '$mdSidenav', function ($scope, Session, $mdSidenav) {

  $scope.$mdSidenav = $mdSidenav;
  $scope.session = false;

  Session.get(function (data) {
    $scope.session = data; // Session exists , we are logged in :)
  })

  $scope.groups = function(){
    return $scope.session.groups ? $scope.session.groups : [];
  }


  $scope.accountMenu = [
    {
      state: 'agenda',
      title: 'Agenda',
      icon: 'event'
    },
    {
      state: 'products',
      title: 'Meus produtos',
      icon: 'local_mall'
    },
    {
      state: 'history',
      title: 'Histórico',
      icon: 'history'
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


