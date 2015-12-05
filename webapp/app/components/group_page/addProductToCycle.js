angular.module('amep-group-page').
controller('addProductToCycleController', ['$scope','$mdDialog','weeks','data', function ($scope,$mdDialog,weeks,data) {
  $scope.weeks = weeks;
  $scope.currentProduct = data ? data.currentProduct : undefined;



  $scope.addProductToCycle = function() {
    $mdDialog.cancel();
  };

}]);
