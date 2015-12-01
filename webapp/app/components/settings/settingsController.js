angular.module('amep-settings').
controller('settingsController', ['$scope', 'Prossumer', 'currentSession', function ($scope, Prossumer, currentSession) {

  //$scope.showConfirmationMessage = false;
  $scope.email = angular.copy(currentSession.email);
  $scope.name = angular.copy(currentSession.name);
  $scope.phone = angular.copy(currentSession.phone);

  $scope.saveSettingsChanges = function (name, email, phone) {

    $scope.errorMessages = null;

    Prossumer.update({name: name, email: email, password: password, phone: phone}, function () {

      /*
      console.log($scope.email);
      $scope.showConfirmationMessage = true;
      console.log($scope.email);
      */

    }, function (error) {
      console.log(error);
      $scope.errorMessages = error.data;
    });
  }

}]);
