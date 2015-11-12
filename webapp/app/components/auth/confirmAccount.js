angular.module('amep-auth').
controller('confirmAccountController', ['$scope', 'Prossumer', '$state', '$stateParams', function ($scope, Prossumer, $state, $stateParams) {
  console.log('xx');
  console.log($stateParams);
  if (!$stateParams.id && !$stateParams.hash) {
    $state.go('home');
  } else {

    Prossumer.confirmAccount({id: $stateParams.id, hash: $stateParams.hash}).then(function (data) {
      console.log(data);
      switch (data.status) {
        case 'confirmed':
          console.log('confirmed');
          break;
        case 'already_confirmed':
          console.log('already_confirmed')
          break;
        case 'not_confirmed':
          console.log('not_confirmed');
          break;
        default:
          console.log('error, probably invalid ?')
      }


      $state.go('agenda', {}, {reload: true});
    }, function (error) {
      //TODO what to do here?
    });

  }

}]);
