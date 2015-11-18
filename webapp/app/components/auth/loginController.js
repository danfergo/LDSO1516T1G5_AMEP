angular.module('amep-auth').
controller('loginController', ['$scope', 'Session', '$state', '$mdToast', function ($scope, Session, $state, $mdToast) {


  $scope.login = function (email, password) {
    $scope.errorMessage = null;
    Session.save({email: email, password: password}, function (user) {
      $mdToast.show(
        $mdToast.simple()
          .content('Bem-vindo ' + user.name + '!')
          .hideDelay(1000)
      );
      $state.go('agenda', {}, {reload: true});
    }, function (error) {
      $scope.errorMessage = error.data.error;
    });
  }

}]);
