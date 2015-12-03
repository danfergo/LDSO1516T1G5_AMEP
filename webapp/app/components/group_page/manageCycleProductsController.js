angular.module('amep-group-page').
controller('manageCycleProductsController', ['$scope','$mdDialog', function ($scope,$mdDialog) {
  $scope.cancel = function() {
    $mdDialog.cancel();
  };

  $scope.setCurrentProduct = function(){
      $scope.currentProduct = "asd";
  };

}]);
