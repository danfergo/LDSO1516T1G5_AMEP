angular.module('amep-group-page').
controller('addProductToCycleController', ['$filter', '$mdToast', '$scope', '$mdDialog', 'weeks', 'data', 'Group', 'Prossumer', 'auth',
  function ($filter, $mdToast, $scope, $mdDialog, weeks, data, Group, Prossumer, auth) {
    $scope.weeks = angular.copy(weeks);
    $scope.oldAuth = angular.copy(auth);
    $scope.auth = angular.copy(auth);
    $scope.currentProduct = data ? data.currentProduct : undefined;
    $scope.selectedStock = [];
    $scope.selectWeeks = [];
    $scope.productCategories = data.productCategories;
    $scope.flipCard = !!$scope.currentProduct;

    var requestAuth = function (callback) {
      Group.Cycle.Product.get({groupId: data.groupId, productId:  $scope.currentProduct.id}, function (a) {
        a.$update({
          ecos: auth.ecos,
          euros: auth.euros
        }, function (a) {
          $scope.oldAuth = angular.copy(a);
          $scope.auth = angular.copy(a);
          callback && callback();
        })

      });
    }

    var addProductToCycle = function () {
      var selectedWeeks = $filter('filter')($scope.weeks, {selected: true});
      Group.Cycle.Product.save({
        groupId: data.groupId,
        cycleId: data.cycleId,
        id: $scope.currentProduct.id
      }, {weeks: selectedWeeks}, function (product) {
        $mdDialog.hide(product);
      });
    }

    $scope.addProductToCycle = function () {
      if (JSON.stringify($scope.auth) != JSON.stringify($scope.oldAuth)) {
        requestAuth(function () {
          addProductToCycle();
        })
      }
      else {
        addProductToCycle()
      }
    };

    $scope.addProduct = function () {

      Prossumer.Product.save({prossumerId: data.prossumerId}, $scope.currentProduct, function (product) {
        console.log(product);
        $scope.currentProduct = product;
        $mdToast.showSimple(product.title + ' adicionado aos meus produtos');
        $scope.flipCard = true;
      });

    };
  }]);
