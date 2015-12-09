angular.module('amep-group-page').
controller('groupHistoryController', ['$scope', 'Cycle', 'currentGroup', 'currentCycles', function ($scope, Cycle, currentGroup, currentCycles) {

  $scope.cycles= currentCycles;
  $scope.cycleSelected = $scope.cycles[$scope.cycles.length - 2];

  

}]);
