angular.module('amep-group-page').
controller('groupHistoryController', ['$scope', 'Cycle', 'currentGroup', 'currentCycles', function ($scope, Cycle, currentGroup, currentCycles) {
    $scope.cycles= currentCycles;
      $scope.cycleSelected = $scope.cycles[$scope.cycles.length - 1];



      $scope.startDate = moment($scope.cycleSelected.start_time).format('YYYY-MM-DD');
      $scope.endDate = moment($scope.cycleSelected.end_time).format('YYYY-MM-DD');
      $scope.events = [{'date': moment().subtract(7, 'days').format('YYYY-MM-DD'), 'content':'<p>lorem ipsum</p>'},
                       {'date': moment().add(7, 'days').format('YYYY-MM-DD'), 'content':'<p>lorem ipsum</p>'}];


}]);
