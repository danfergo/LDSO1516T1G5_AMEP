angular.module('amep-group').
controller('addProductToCycleController', ['$filter', '$mdToast', '$scope', '$mdDialog', 'weeks', 'data', 'Group', 'Prossumer', 'Upload', 'auth',
  function ($filter, $mdToast, $scope, $mdDialog, weeks, data, Group, Prossumer, Upload, auth) {
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

    $scope.addProduct = function (file) {

      var dat = angular.copy($scope.product);
      dat.file = file;

      if (!file) {
        Prossumer.Product.save({prossumerId: data.prossumerId}, $scope.product, function (product) {
          $scope.flipCard = true;
          $mdToast.showSimple(product.title + ' adicionado aos meus produtos');
          $scope.product = product;
        });
      } else file.upload = Upload.upload({
        url: 'api/v1/prossumers/' + data.prossumerId + '/products/',
        data: dat,
      }).then(function (product) {
        console.log(product)
        $mdToast.showSimple(product.data.title + ' adicionado aos meus produtos');
        $scope.flipCard = true;
        $scope.product = product.data;
      });


    };

    $scope.moreThanOneWeekSelected = function () {
      return $filter('filter')($scope.weeks, {selected: true}).length;
    }

  }]);
