angular.module('amep-group-page').
controller('groupHistoryController', ['$scope', 'Group','Cycle', 'currentGroup', 'currentCycles','ngTableParams', function ($scope, Group, Cycle, currentGroup, currentCycles, ngTableParams) {

  $scope.cycles= currentCycles;
  $scope.cycleSelected = $scope.cycles[$scope.cycles.length - 1];

  $scope.mudaSemana = function(){
    $scope.getWeeks = Group.Cycle.Week.query({groupId: $scope.cycleSelected.group_id, cycleId: $scope.cycleSelected.id});
    console.log($scope.getWeeks);
  };
  $scope.mudaSemana();

}]);
