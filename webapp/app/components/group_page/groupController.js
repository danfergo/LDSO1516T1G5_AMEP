angular.module('amep-group-page').
controller('groupController', ['$scope', '$state', 'currentGroup', '$mdDialog', 'Group', 'currentSession','$mdToast', function ($scope, $state, currentGroup, $mdDialog, Group, currentSession,$mdToast) {
  if (!currentGroup.id) $state.go('404');

  $scope.group = currentGroup;
  $scope.currentSession = currentSession;
  $scope.currentProssumerState = false;
  if (currentSession.id)
  Group.Prossumer.get({groupId: $scope.group.id, prossumerId: $scope.currentSession.id}, function (state) {
      $scope.currentProssumerState = state;
  })


  $scope.joinGroup = function (ev) {
    var message = 'Se ainda não o fizeste sugerimos-te que entres em contacto com os <br>responsáveis do grupo e te apresentes.';

    var confirm = $mdDialog.confirm()
      .title('Estás prestes a aderir ao grupo "' + $scope.group.name + '"')
      .content(message)
      .ariaLabel('Novo grupo')
      .targetEvent(ev)
      .cancel('Cancelar')
      .ok('Confirmar');

    $mdDialog.show(confirm).then(function () {

      Group.Prossumer.save({},{groupId: $scope.group.id}, function (group) {
        $mdToast.show(
          $mdToast.simple()
            .content('Pedido de adesão enviado ')
            .hideDelay(1000)
        );
      })

    });
  }
}]);
