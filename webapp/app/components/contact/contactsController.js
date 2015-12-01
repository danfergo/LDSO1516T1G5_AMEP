angular.module('amep-contacts').
controller('contactController', ['$scope', 'currentSession', '$http', '$mdToast',function ($scope, currentSession, $http, $mdToast) {
  $scope.currentSession = currentSession;
  $scope.error = null;

  $scope.contactSend = function (nome, email, tlm, assunto, myMessage) {
    $scope.error = null;
    $scope.email = angular.copy(email);
    console.log($scope.nome);
    console.log($scope.email);
    $http.post('/api/v1/contact-form', {
      nome: nome,
      email: email,
      tlm: tlm,
      assunto: assunto,
      myMessage: myMessage
    }).then(function(){
      $mdToast.show(
        $mdToast.simple()
          .content('A sua mensagem foi enviada!')
          .hideDelay(1000)
      );
    }, function(){
      $scope.error = "Erro: Tente mais tarde!";
    });
  }
}]);
