angular.module('amep-group-page').
controller('groupShowcaseController', ['$scope','$mdDialog', function ($scope,$mdDialog) {
   console.log(angular.element(document.body));
    $scope.openCycleProductsManagement = function(ev){
      $mdDialog.show({
        controller: 'manageCycleProductsController',
        templateUrl: 'components/group_page/manageCycleProducts.html',
        targetEvent: ev,
        clickOutsideToClose:false,
      })
      .then(function(answer) {
        $scope.status = 'You said the information was "' + answer + '".';
      }, function() {
        $scope.status = 'You cancelled the dialog.';
      });
    }
  $scope.openCycleProductsManagement();
}]);
