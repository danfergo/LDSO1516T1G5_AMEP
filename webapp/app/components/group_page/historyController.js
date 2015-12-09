angular.module('amep-group-page').
controller('groupHistoryController', ['$scope', 'Cycle', 'currentGroup', 'currentCycles', function ($scope, Cycle, currentGroup, currentCycles) {

  $scope.cycles= currentCycles;
  $scope.cycleSelected = $scope.cycles[$scope.cycles.length - 2];
/*
  $scope.startDate = moment().subtract(10, 'days').format('YYYY-MM-DD');
  $scope.endDate = moment().add(10, 'days').format('YYYY-MM-DD');
  $scope.events = [
    {'date': moment().subtract(7, 'days').format('YYYY-MM-DD'), 'content':'<p>lorem ipsum</p>'},
    {'date': moment().add(7, 'days').format('YYYY-MM-DD'), 'content':'<p>lorem ipsum</p>'}
  ];

  */

/*
  $scope.startDate = moment($scope.cycleSelected.start_time).format('YYYY-MM-DD');
  $scope.endDate = moment($scope.cycleSelected.end_time).format('YYYY-MM-DD');
  $scope.events = [
    {'date': moment().subtract(7, 'days').format('YYYY-MM-DD'), 'content':'<p>lorem ipsum</p>'},
    {'date': moment().add(7, 'days').format('YYYY-MM-DD'), 'content':'<p>lorem ipsum</p>'}
  ];
console.log("--> UM ::");
console.log($scope.startDate);
  $scope.selectChanged = function(){
    //$("#reloadMe").load(location.href + " #reloadMe");
    console.log("--> TRES ::");
    console.log($scope.startDate);
    $scope.startDate = moment($scope.cycleSelected.start_time).format('YYYY-MM-DD');
    $scope.endDate = moment($scope.cycleSelected.end_time).format('YYYY-MM-DD');
    $scope.events = [{'date': moment().subtract(7, 'days').format('YYYY-MM-DD'), 'content':'<p>lorem ipsum</p>'},
    {'date': moment().add(7, 'days').format('YYYY-MM-DD'), 'content':'<p>lorem ipsum</p>'}];
    console.log("--> QUATRO ::");
    console.log($scope.startDate);
  };

  console.log("--> DOIS ::");
  console.log($scope.startDate);
*/
    $scope.startDate = moment().subtract(2, 'months').format('YYYY-MM-DD');
    $scope.endDate = moment().add(2, 'months').format('YYYY-MM-DD');
    $scope.events = [{'date': moment().subtract(7, 'days').format('YYYY-MM-DD'), 'content':'<p>lorem ipsum</p>'},
      {'date': moment().add(7, 'days').format('YYYY-MM-DD'), 'content':'<p>lorem ipsum</p>'}];

}]);
