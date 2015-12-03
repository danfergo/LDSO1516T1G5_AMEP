angular.module('amep-group-page').
controller('groupHistoryController', ['$scope', 'Cycle', function ($scope, Cycle) {
    $scope.cycles=Cycle.query();
    $scope.cycleSelected = {};
    


    $scope.startDate = moment().subtract(2, 'months').format('YYYY-MM-DD');
    $scope.endDate = moment().add(2, 'months').format('YYYY-MM-DD');
    $scope.events = [{'date': moment().subtract(7, 'days').format('YYYY-MM-DD'), 'content':'<p>lorem ipsum</p>'},
                     {'date': moment().add(7, 'days').format('YYYY-MM-DD'), 'content':'<p>lorem ipsum</p>'}];



}]);
