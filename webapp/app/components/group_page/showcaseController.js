angular.module('amep-group-page').

controller('groupShowcaseController',
  ['$scope', '$mdDialog', '$mdToast', 'currentSession', 'currentGroup', 'currentCycles', 'productCategories', 'prossumerProducts', 'Group', 'Cycle', 'Product',
    function ($scope, $mdDialog, $mdToast, currentSession, currentGroup, currentCycles, productCategories, prossumerProducts, Group, Cycle, Product) {
      $scope.currentCycle = Cycle.firstAvailable(currentCycles);
      $scope.currentCycleState = Cycle.whatState($scope.currentCycle);
      $scope.showOnlyMyProducts = $scope.currentCycleState == 'supplying' ? true : false;
      $scope.prossumerProductsInCycle = [];
      $scope.cycleShowcaseProducts = [];
      $scope.auth = undefined;
      $scope.whatState = Cycle.whatState;

      $scope.productSellingPrice = Group.Cycle.Product.productSellingPrice;

      var selectProssumerProductsInCycle = function (sProducts) {
        for (var i in prossumerProducts) {
          $scope.prossumerProductsInCycle[i] = Product.filterById(sProducts, prossumerProducts[i].id) != null;
        }
      }

      var setShowcaseProducts = function (products) {
        $scope.cycleShowcaseProducts = products;
        selectProssumerProductsInCycle(products);
      }

      if ($scope.currentCycle)
        Group.Cycle.Product.query({
          groupId: currentGroup.id,
          cycleId: $scope.currentCycle.id
        }, setShowcaseProducts);


      $scope.filteredShowcaseProducts = function () {
        return $scope.showOnlyMyProducts && currentSession.id
          ? Product.filterBySessionId($scope.cycleShowcaseProducts, currentSession.id)
          : $scope.cycleShowcaseProducts;
      }


      var confirmRemovingProductFromCycle = function (i) {
        $scope.prossumerProductsInCycle[i] = true;
        var product = prossumerProducts[i];

        var confirm = $mdDialog.confirm()
          .title('Remover item "')
          .content('Queres remover o item "..." do ciclo ?')
          .ariaLabel('Novo grupo')
          //.targetEvent(ev)
          .cancel('Cancelar')
          .ok('Confirmar');

        $mdDialog.show(confirm).then(function () {
          Group.Cycle.Product.delete({
            groupId: currentGroup.id,
            cycleId: $scope.currentCycle.id,
            id: product.id
          }, function (products) {
            setShowcaseProducts(products);
            $mdToast.showSimple('Removido do ciclo com sucesso');
          })

          $scope.prossumerProductsInCycle[i] = false;

        });
      }

      $scope.addOrEditProduct = function (product, canceled) {
        $mdDialog.show({
            controller: 'addProductToCycleController',
            templateUrl: 'components/group_page/addProductToCycle.html',
            //  targetEvent: ev,
            clickOutsideToClose: false,
            parent: angular.element(document.body),
            resolve: {
              'data': function () {
                return {
                  currentProduct: product,
                  cycleId: $scope.currentCycle.id,
                  groupId: currentGroup.id,
                  productCategories: productCategories,
                  prossumerId: currentSession.id
                }
              },
              'weeks': function () {
                return Group.Cycle.Week.query({groupId: currentGroup.id, cycleId: $scope.currentCycle.id}).$promise;
              },
              'auth': [function () {
                return product ? Group.ProductAuth.get({groupId: currentGroup.id, id: product.id}).$promise : null;
              }]
            }
          })
          .then(function (product) {
            $mdToast.showSimple('Adicionado ao ciclo com sucesso');
            $scope.cycleShowcaseProducts.unshift(product);
          }, canceled);
      }


      $scope.changeProssumerProductInCycle = function (i) {
        if ($scope.prossumerProductsInCycle[i] == false) {
          confirmRemovingProductFromCycle(i);
        }
        else {
          $scope.addOrEditProduct(prossumerProducts[i], function () {
            $scope.prossumerProductsInCycle[i] = false
          });
        }

      }

    }
  ]);
