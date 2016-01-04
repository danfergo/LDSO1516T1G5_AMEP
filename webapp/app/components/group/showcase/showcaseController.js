angular.module('amep-group').
controller('groupShowcaseController',
  ['$scope', '$mdDialog', '$mdToast', 'currentSession', 'currentGroup', '$filter', 'currentCycles', 'productCategories', 'prossumerProducts', 'Group', 'Cycle', 'Product', 'productAuths',
    function ($scope, $mdDialog, $mdToast, currentSession, currentGroup, $filter, currentCycles, productCategories, prossumerProducts, Group, Cycle, Product, productAuths) {
      $scope.currentCycle = Cycle.firstAvailable(currentCycles);
      $scope.currentCycleState = Cycle.whatState($scope.currentCycle);
      $scope.showOnlyMyProducts = $scope.currentCycleState == 'supplying' ? true : false;
      $scope.prossumerProductsInCycle = [];
      $scope.cycleShowcaseProducts = [];
      $scope.whatState = Cycle.whatState;
      $scope.filterCategories = [];
      $scope.purchases = {};

      $scope.productSellingPrice = Group.Cycle.Product.productSellingPrice;


      Group.Prossumer.get({groupId: currentGroup.id, prossumerId: currentSession.id}, function (state) {
        $scope.prossumerState = state;
      });


      var orders = [];
      if($scope.currentCycle) Group.Cycle.Order.query({groupId: currentGroup.id, cycleId: $scope.currentCycle.id}, function (o) {
        orders = o;
      });

      $scope.productAuth = function (product) {
        return Group.ProductAuth.findByProductId(productAuths, product.id);
      }

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


      var selectedCategoriesIds = function () {
        var categoriesIds = [];
        $scope.filterCategories.forEach(function (element, index) {
          if (element) categoriesIds.push(index);
        })
        return categoriesIds;
      }

      var filterByCategory = function (products) {
        var selectedCategoriesIs = selectedCategoriesIds();
        if (selectedCategoriesIs.length == 0) return products;
        else return products.filter(function (product) {
          if (selectedCategoriesIs.indexOf(product.product_category_id) == -1) {
            return false;
          } else {
            return true;
          }
        })
      }

      $scope.filteredShowcaseProducts = function () {
        return filterByCategory($scope.showOnlyMyProducts && currentSession.id
          ? Product.filterBySessionId($scope.cycleShowcaseProducts, currentSession.id)
          : $scope.cycleShowcaseProducts);
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

      $scope.saveProduct = function (product, canceled) {
        $mdDialog.show({
            controller: 'addProductToCycleController',
            templateUrl: 'components/group/submit-product/addProductToCycle.html',
            //  targetEvent: ev,
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
          $scope.saveProduct(prossumerProducts[i], function () {
            $scope.prossumerProductsInCycle[i] = false
          });
        }

      }


      $scope.approveProduct = function (product, ok) {
        Group.ProductAuth.update({
          groupId: currentGroup.id,
          id: product.id
        }, {state: ok ? 2 : 0}, function (productAuth) {

        });
      }

      $scope.purchase = function (productId) {
        var weekOrders = [];
        for (var weekId in  $scope.purchases[productId]) {
          if ($scope.purchases[productId][weekId] > 0) {
            weekOrders.push({week_id: weekId, quantity: $scope.purchases[productId][weekId]})
          }
        }

        var order = {
          product_id: productId,
          prossumer_id: currentSession.id,
          weeks: weekOrders
        };
        Group.Cycle.Order.save({groupId: currentGroup.id, cycleId: $scope.currentCycle}, order,
          function (order) {
            $scope.purchases[productId] = null;
          });
      }


      $scope.availableStockFor = function(stock){
        if(!stock) return 0;

        var actualStock = stock.quantity;
        for(var o in orders){
          if(orders[o].stock_id == stock.id){
            actualStock -= orders[o].quantity;
          }
        }
        return actualStock;
      }

    }]);
