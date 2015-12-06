angular.module('amep-group-page').
controller('addProductToCycleController', ['$filter', '$scope', '$mdDialog', 'weeks', 'data', 'Group', function ($filter, $scope, $mdDialog, weeks, data, Group) {
  $scope.weeks = angular.copy(weeks);
  $scope.currentProduct = data ? data.currentProduct : undefined;
  $scope.selectedStock = [];
  $scope.selectWeeks = [];


  $scope.addProductToCycle = function () {
    var selectedWeeks = $filter('filter')($scope.weeks, {selected: true});
    Group.Cycle.Product.save({groupId: data.groupId, cycleId: data.cycleId, id: data.currentProduct.id},{weeks: selectedWeeks}, function(data){

    });
  };


}]);
