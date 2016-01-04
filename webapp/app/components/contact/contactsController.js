angular.module('amep-contacts').
controller('contactController', ['$scope', 'currentSession', '$http', '$mdToast', '$state',function ($scope, currentSession, $http, $mdToast, $state) {
  $scope.currentSession = currentSession;
  $scope.error = null;
  $scope.msg = {};

  $scope.contactSend = function (nome, email, tlm, assunto, myMessage) {
    $scope.error = null;
    console.log(assunto);
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
      $state.go('agenda', {}, {reload: true});
    }, function(){
      $scope.error = "Erro: Tente mais tarde!";
    });
  }
}]);
