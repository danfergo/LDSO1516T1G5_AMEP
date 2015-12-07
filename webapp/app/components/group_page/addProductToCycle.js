angular.module('amep-group-page').
controller('addProductToCycleController', ['$filter','$mdToast', '$scope', '$mdDialog', 'weeks', 'data', 'Group', 'Prossumer',
  function ($filter,$mdToast, $scope, $mdDialog, weeks, data, Group, Prossumer) {
  $scope.weeks = angular.copy(weeks);
  $scope.currentProduct = data ? data.currentProduct : undefined;
  $scope.selectedStock = [];
  $scope.selectWeeks = [];
  $scope.productCategories = data.productCategories;
  $scope.flipCard = !!$scope.currentProduct;

  $scope.addProductToCycle = function () {
    var selectedWeeks = $filter('filter')($scope.weeks, {selected: true});
    Group.Cycle.Product.save({groupId: data.groupId, cycleId: data.cycleId, id: data.currentProduct.id},{weeks: selectedWeeks}, function(product){
      $mdDialog.hide(product);
    });
  };

  $scope.addProduct = function(){
    Prossumer.Product.save({prossumerId:data.prossumerId},$scope.currentProduct,function(product){
      $mdToast.showSimple(product.title + ' adicionado aos meus produtos');
      $scope.flipCard = true;
      //$mdDialog.hide();
    });
  };
}]);
