angular.module('amep-group-page').
controller('groupShowcaseController', ['$scope', '$mdDialog', 'Group', function ($scope, $mdDialog, Group) {
  /*$scope.openCycleProductsManagement = function (ev) {
    $mdDialog.show({
        controller: 'manageCycleProductsController',
        templateUrl: 'components/group_page/manageCycleProducts.html',
        targetEvent: ev,
        clickOutsideToClose: false,
        fullscreen: true,
        parent: angular.element(document.body)
      })
      .then(function (answer) {
        $scope.status = 'You said the information was "' + answer + '".';
      }, function () {
        $scope.status = 'You cancelled the dialog.';
      });
  }*/
  //$scope.openCycleProductsManagement();


  $scope.currentCycle = null;
  $scope.currentCycleState = null; // adding_products, purchasing or happening
  $scope.showOnlyMyProducts = $scope.currentCycleState == 'adding_products' ? true : false;

  $scope.products = [];



  $scope.chooseProduct = function (index) {

  }


}]);
