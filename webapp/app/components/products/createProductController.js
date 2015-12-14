angular.module('amep-products').
controller('createProductController', ['$scope', 'Session', '$mdDialog','Product','$mdToast', function ($scope, Session, $mdDialog,Product,$mdToast) {
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();

  };
  $scope.ok = function() {
    Product.save($scope.product,function(product){
      $mdToast.show(
        $mdToast.simple()
          .content(product.title + ' adicionado aos meus produtos')
          .hideDelay(1000)
      );
      $mdDialog.hide();
    });
  };
}]);
