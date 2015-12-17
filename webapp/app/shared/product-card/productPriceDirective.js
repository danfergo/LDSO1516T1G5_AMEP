angular.module('amep-product-card', ['amep-model'])
  .directive('productPrice', [function () {

    return {
      controller: ['Group', '$scope', function(Group,$scope){
          $scope.productSellingPrice = Group.Cycle.Product.productSellingPrice;
      }],
      restrict: 'A',
      scope: {
        'product': '=productPrice'
      },
      template: "<b style='margin:0;'>{{ productSellingPrice(product).ecos | currency :'E':2}}</b> + " +
      "{{ productSellingPrice(product).euros | currency :'€':2}}<br> /" +
      "{{product.unit}}"
    }

  }])
