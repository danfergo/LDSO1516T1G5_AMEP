angular.module('amep-products').
controller('createProductController', ['$scope', 'Session', '$mdDialog','Prossumer','$mdToast', 'productCategories','prossumerId', function ($scope, Session, $mdDialog,Prossumer,$mdToast,productCategories,prossumerId) {
  $scope.productCategories = productCategories;
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();

  };
  $scope.ok = function() {
    Prossumer.Product.save({prossumerId: prossumerId},$scope.product,function(product){
      $mdToast.show(product.title + ' adicionado aos meus produtos');
      $mdDialog.hide();
    });
  };
}]);
