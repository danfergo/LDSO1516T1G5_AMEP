angular.module('amep-sidebar', []).
controller('SidebarController', ['$scope','$state', 'Session', '$mdSidenav', function ($scope,$state, Session, $mdSidenav) {
  $scope.data = {
    moreSelect: null
  };
  $scope.changeState = function (value){
    if($scope.data.moreSelect==="sair"){
      $state.go('logout');
    }
    else if($scope.data.moreSelect==="def"){
      $state.go('settings')
    }
  };


  $scope.$mdSidenav = $mdSidenav;
  $scope.session = false;

  Session.get(function (data) {
    $scope.session = data; // Session exists , we are logged in :)
  });

  $scope.groups = function(){
    return $scope.session.groups ? $scope.session.groups : [];
  }
  $scope.testgroups=[
    {name: 'grupo 1'},
    {name: 'grupo 2'},
    {name: 'grupo 3'},
    {name: 'grupo 4'},
    {name: 'grupo 5'},
    {name: 'grupo 6'},
    {name: 'grupo 7'},
    {name: 'grupo 8'},
    {name: 'grupo 9'}
  ];

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
