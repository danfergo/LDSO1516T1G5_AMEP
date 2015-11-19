angular.module('amep-auth').
controller('confirmAccountController', ['$scope', 'Prossumer', '$state', '$stateParams', 'Session', function ($scope, Prossumer, $state, $stateParams, Session) {
  $scope.message = false;

  $scope.messages = {
    confirmed: {
      title: 'Conta confirmada com succeso',
      text: 'Agora que a tua conta já se encontra confirmada já podes inicar sessão.',
      action_state: 'login',
      action_text: 'Ir para página de iniciar sessão'
    },
    not_confirmed: {
      title: 'Conta não confirmada',
      text: 'Não foi possivel confirmar a tua conta. O link em que clicaste encontra-se invalido. Por favor, verifica de novo a tua caixa de entrada.' //TODO ?!
    },
    logged_in : {
      title: 'Estás conectado com outra conta',
      text: 'O explorador que estás a utilizar já possui uma conta conectada. Por favor termina sessão para que possas ativar a tua nova conta.',
      action_state: 'logout',
      action_text: 'Terminar sessão'
    }
  }
  $scope.messages['invalid'] = $scope.messages['not_confirmed'];
  $scope.messages['already_confirmed'] = angular.extend(angular.copy($scope.messages.confirmed), {
    title: 'A conta já se econtrava confirmada'
  });

  if (!$stateParams.id && !$stateParams.hash) {
    $state.go('home');
  } else {
    Session.get(function (data) {
      if (data.id) {
        $scope.message = $scope.messages['logged_in'];
      } else {
        Prossumer.confirmAccount({id: $stateParams.id, hash: $stateParams.hash}, function (data) {
          $scope.message = $scope.messages[data.data.status];
        }, function (error) {
          $scope.message = $scope.messages['not_confirmed'];
        });
      }
    })

  }

}]);
