angular.module('amep-group').
controller('addProductToCycleController', ['$filter', '$mdToast', '$scope', '$mdDialog', 'weeks', 'data', 'Group', 'Prossumer', 'auth',
  function ($filter, $mdToast, $scope, $mdDialog, weeks, data, Group, Prossumer, auth) {
    $scope.weeks = angular.copy(weeks);
    $scope.oldAuth = auth ? angular.copy(auth) : {};
    $scope.auth = auth ? angular.copy(auth) : {};
    $scope.product = data ? data.currentProduct : undefined;
    $scope.selectedStock = [];
    $scope.selectWeeks = [];
    $scope.productCategories = data.productCategories;
    $scope.flipCard = !!$scope.product;

    var requestAuth = function (callback) {
      Group.ProductAuth.save({groupId: data.groupId}, {
        product_id: $scope.product.id,
        ecos: $scope.auth.ecos,
        euros: $scope.auth.euros
      }, function (a) {
        $scope.oldAuth = angular.copy(a);
        $scope.auth = angular.copy(a);
        callback && callback();
      });
    }

    var addProductToCycle = function () {
      var selectedWeeks = $filter('filter')($scope.weeks, {selected: true});
      Group.Cycle.Product.save({
        groupId: data.groupId,
        cycleId: data.cycleId,
        id: $scope.product.id
      }, {weeks: selectedWeeks}, function (product) {
        $mdDialog.hide(product);
      });
    }

    $scope.addProductToCycle = function () {
      if (JSON.stringify($scope.auth) != JSON.stringify($scope.oldAuth)) {
        requestAuth(function () {
          addProductToCycle();
        });
      }
      else {
        addProductToCycle()
      }
    };

    $scope.addProduct = function () {

      Prossumer.Product.save({prossumerId: data.prossumerId}, $scope.product, function (product) {
        $scope.product = product;
        $mdToast.showSimple(product.title + ' adicionado aos meus produtos');
        $scope.flipCard = true;
      });

    };

    $scope.moreThanOneWeekSelected = function(){
      return  $filter('filter')($scope.weeks, {selected: true}).length;
    }

  }]);
