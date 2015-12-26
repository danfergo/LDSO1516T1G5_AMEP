angular.module('amep-product-card', ['amep-model'])
  .directive('productPrice', [function () {

    return {
      controller: ['Group', '$scope', function(Group,$scope){
          $scope.productPrice = $scope.authorizedPrice ? $scope.authorizedPrice : Group.Cycle.Product.productSellingPrice($scope.product);
      }],
      restrict: 'A',
      scope: {
        'product': '=productPrice',
        'authorizedPrice': '=productAuthorizedPrice'
      },
      template: "<b style='margin:0;'>{{ productPrice.ecos | currency :'E':2}}</b> + " +
      "{{productPrice.euros | currency :'€':2}}<br> /" +
      "{{product.unit}}<br>"
    }

  }])
