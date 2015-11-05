angular.module('amep-auth').
controller('loginController',['$scope', 'Session', function ($scope, Session) {

  $scope.login = function (email, password){
    Session.save({email:email, password: password});
  }

}]);
