angular.module('amep-group-page').
controller('groupHistoryController', ['$scope', 'Cycle', 'currentGroup', function ($scope, Cycle, currentGroup) {
    $scope.cycles=Cycle.query({groupId: currentGroup.id}, function () {
      $scope.cycleSelected = $scope.cycles[$scope.cycles.length - 1];
    });




    $scope.startDate = moment().subtract(2, 'months').format('YYYY-MM-DD');
    $scope.endDate = moment().add(2, 'months').format('YYYY-MM-DD');
    $scope.events = [{'date': moment().subtract(7, 'days').format('YYYY-MM-DD'), 'content':'<p>lorem ipsum</p>'},
                     {'date': moment().add(7, 'days').format('YYYY-MM-DD'), 'content':'<p>lorem ipsum</p>'}];



}]);
