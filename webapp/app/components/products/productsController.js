angular.module('amep-products').
controller('productsController', ['$scope', 'Session', 'Prossumer', 'products', '$mdDialog', 'currentSession',
  function ($scope, Session, Prossumer, products, $mdDialog, currentSession) {

    $scope.session = currentSession;
    $scope.products = products;

    $scope.newProduct = function (event) {
      $mdDialog.show({
          controller: 'createProductController',
          templateUrl: 'components/products/createProduct.html',
          targetEvent: event,
          clickOutsideToClose: true,
          resolve: {
            productCategories: ['ProductCategory', function (ProductCategory) {
              return ProductCategory.query().$promise;
            }],
            prossumerId: function(){
              return currentSession.id;
            }
          }
        })
        .then(function () {
          Prossumer.Product.query({prossumerId: currentSession.id},function (products) {
            $scope.products = products;
          });
        });
    }
  }]);
