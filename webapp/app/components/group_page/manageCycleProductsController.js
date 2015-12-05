angular.module('amep-group-page').
controller('manageCycleProductsController', ['$scope','$mdDialog', function ($scope,$mdDialozg) {
  $scope.cancel = function() {
    $mdDialog.cancel();
  };

  $scope.setCurrentProduct = function(){
      $scope.currentProduct = "asd";
  };

}]);
