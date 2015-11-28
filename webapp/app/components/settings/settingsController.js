angular.module('amep-settings').
controller('settingsController', ['$scope', 'Prossumer', 'currentSession', function ($scope, Prossumer, currentSession) {

  //$scope.showConfirmationMessage = false;

  $scope.email = angular.copy(currentSession.email);
  $scope.name = angular.copy(currentSession.name);
  $scope.phone = angular.copy(currentSession.phone);

  $scope.isDisabled = function() {
    if (
      $scope.email == currentSession.email &&
      $scope.name == currentSession.name &&
      $scope.phone == currentSession.phone ||
      !$scope.userSettingsForm.$valid
    ) return true;
  }

  $scope.saveSettingsChanges = function (name, email, phone) {


    $scope.errorMessages = null;
/*
    console.log(name);
    console.log(email);
    console.log(phone);
    */

    Prossumer.updateSettings(currentSession.id, {name: name, email: email, phone: phone},

      function (data) {

        currentSession.name = $scope.name;
        currentSession.email = $scope.email;
        currentSession.phone = $scope.phone;

      }, function (error) {

        $scope.errorMessages = error.data;
      }
    );

  }}]);
