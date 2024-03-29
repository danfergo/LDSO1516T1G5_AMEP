angular.module('amep-auth').
controller('signUpController', ['$scope', 'Prossumer', '$state', '$mdToast',function ($scope, Prossumer, $state, $mdToast) {
  $scope.showConfirmationMessage = false;
  $scope.email = null;
  $scope.signUp = function (name, email, password, phone) {
    $scope.email = angular.copy(email);
    $scope.errorMessages = null;
    Prossumer.save({name: name, email: email, password: password, phone: phone}, function () {
      console.log($scope.email);
      $scope.showConfirmationMessage = true;
      console.log($scope.email);
      $scope.flagReg=true;
    }, function (error) {
      console.log(error);
      $scope.errorMessages = error.data;
    });
  };
}]);
