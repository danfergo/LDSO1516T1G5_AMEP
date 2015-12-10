angular.module('amep-prossumer-dashboard').
controller('productsController', ['$scope', 'Session','Product', 'products', '$mdDialog', function ($scope, Session, Product, products,$mdDialog) {

  $scope.session = Session.get();
  $scope.products = products;

  $scope.newProduct = function (event) {
    $mdDialog.show({
        controller: 'productModalController',
        templateUrl: 'components/p_dashboard/products/product-modal.html',
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
