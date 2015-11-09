angular.module('amep-auth').
controller('signUpController',['$scope', 'Session', '$state','$mdToast', function ($scope, Session, $state,$mdToast) {

  $scope.login = function (email, password){
    $scope.errorMessage = null;
    Session.save({email:email, password: password}, function (user) {
      $mdToast.show(
        $mdToast.simple()
          .content('Bem- vindo ' + user.name +'!')
          .hideDelay(1500)
      );
      $state.go('agenda');
    },function(error){
      $scope.errorMessage = error.data.error;
    });
  }

}]);
