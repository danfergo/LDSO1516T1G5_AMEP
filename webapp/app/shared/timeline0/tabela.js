angular.module('tabela', ['ngMaterial'])

.directive('tabela', [function(){
  function controller($scope, Group){

    $scope.getWeeks = Group.Cycle.Week.query({groupId: $scope.bla.group_id, cycleId: $scope.bla.id});
    //$scope.getStocks = Group.Cycle.Week.query({groupId: $scope.bla.group_id, cycleId: $scope.bla.id});
    $scope.$watch(function(){
      return $scope.bla;
    },function(){
      $scope.getWeeks = Group.Cycle.Week.query({groupId: $scope.bla.group_id, cycleId: $scope.bla.id});
    })
  }
  return {
    restrict: 'AE',
    controller: controller,
    scope: {
      'bla':'=',
      'events' : '='
    },
    templateUrl: 'shared/timeline0/tabela.html'
  }

}])
