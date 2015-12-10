angular.module('amep-group-page').
controller('groupHistoryController', ['$scope', 'Group','Cycle', 'currentGroup', 'currentCycles','ngTableParams', function ($scope, Group, Cycle, currentGroup, currentCycles, ngTableParams) {

  console.log(currentCycles);
  $scope.cycles= currentCycles;
  $scope.cycleSelected = $scope.cycles[0];

  $scope.mudaSemana = function(){
    $scope.getWeeks = Group.Cycle.Week.query({groupId: $scope.cycleSelected.group_id, cycleId: $scope.cycleSelected.id});
  };
  $scope.mudaSemana();

  var self = this;
var data = [{name: "Moroni", age: 50}, {name: "Moni", age: 45} /*,*/];
self.tableParams = new ngTableParams({}, { getData: data});


}]);
