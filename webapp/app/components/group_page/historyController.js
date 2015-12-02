angular.module('amep-group-page').
controller('groupHistoryController', ['$scope', 'Cycle', function ($scope, Cycle) {
    $scope.cycles=Cycle.query();
}]);
