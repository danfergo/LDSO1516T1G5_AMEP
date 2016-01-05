angular.module('amep-settings').
controller('settingsController', ['$scope', 'Prossumer', 'currentSession', '$mdToast', function ($scope, Prossumer, currentSession, $mdToast, $mdDialog) {

  $scope.name = angular.copy(currentSession.name);
  $scope.phone = angular.copy(currentSession.phone);

  $scope.currentPassword = null;
  $scope.newPassword = null;

  $scope.isProfileChangeDisable = function () {
    if (
      $scope.name == currentSession.name &&
      $scope.phone == currentSession.phone || !$scope.userProfileForm.$valid
    ) return true;
    else
      return false;
  }


  function sendMessage(message) {
    $mdToast.show(
      $mdToast.simple()
        .content(message)
        .hideDelay(2000)
    );
  }

  $scope.saveProfileChanges = function () {

    Prossumer.update({id: currentSession.id, name: $scope.name, phone: $scope.phone},
      function (data) {

        currentSession.name = angular.copy($scope.name);
        currentSession.phone = angular.copy($scope.phone);

        sendMessage(data.message);

      }, function (error) {

        sendMessage('Falha na alteração de perfil (erro ' + error.status + ')');
      }
    );
  }

  $scope.savePasswordChanges = function () {

    Prossumer.update({id: currentSession.id, currentPassword: $scope.currentPassword, password: $scope.newPassword},
      function (data) {

        sendMessage(data.message);

        if (!data.error) {

          $scope.currentPassword = null;
          $scope.newPassword = null;

          $scope.userPasswordForm.$setUntouched();
          $scope.userPasswordForm.$setUntouched();
        }


      }, function (error) {

        sendMessage('Falha na alteração da palavra-passe (erro ' + error.status + ')');
      }
    );
  }

}]);
