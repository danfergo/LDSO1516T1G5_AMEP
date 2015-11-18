angular.module('amep-prossumer-dashboard').
controller('productsController', ['$scope', 'Session', '$mdDialog', function ($scope, Session, $mdDialog) {

  $scope.newProduct = function (event) {
    $mdDialog.show({
        controller: 'productModalController',
        templateUrl: 'components/p_dashboard/products/product-modal.html',
        targetEvent: event,
        clickOutsideToClose:true
      })
      .then(function (answer) {
        $scope.alert = 'You said the information was "' + answer + '".';
      }, function () {
        $scope.alert = 'You cancelled the dialog.';
      });
  }


}]);
