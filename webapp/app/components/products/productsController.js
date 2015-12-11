angular.module('amep-products').
controller('productsController', ['$scope', 'Session','Product', 'products', '$mdDialog', function ($scope, Session, Product, products,$mdDialog) {

  $scope.session = Session.get();
  $scope.products = products;

  $scope.newProduct = function (event) {
    $mdDialog.show({
        controller: 'createProductController',
        templateUrl: 'components/products/createProduct.html',
        targetEvent: event,
        clickOutsideToClose:true
      })
      .then(function () {
          Product.query(function(products){
            $scope.products = products;
          });
      });
  }
}]);
