angular.module('amep-contacts').
controller('contactController', ['$scope',function ($scope) {
  //$scope.showConfirmationMessage = false;
  //$scope.email = null;

  $scope.contactSend = function (assunto, myMessage) {
    $scope.assunto = angular.copy(email);
    $scope.myMessage = angular.copy(myMessage);
    $scope.errorMessages = null;
  }
}]);
