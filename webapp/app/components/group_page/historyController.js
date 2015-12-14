'use strict';

angular.module('amep-group-page').
controller('groupHistoryController', ['$scope', 'Group','Cycle', 'currentGroup', 'currentCycles', function ($scope, Group, Cycle, currentGroup, currentCycles) {

  $scope.cycles= currentCycles;
  $scope.cycleSelected = $scope.cycles[0];

  $scope.mudaSemana = function(){
    $scope.getWeeks = Group.Cycle.Week.query({groupId: $scope.cycleSelected.group_id, cycleId: $scope.cycleSelected.id});
  };
  $scope.mudaSemana();


}]);
