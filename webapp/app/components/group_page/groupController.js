angular.module('amep-group-page').
controller('groupController', ['$scope', '$state', 'currentGroup', '$mdDialog', 'Group', 'currentSession', function ($scope, $state, currentGroup, $mdDialog, Group, currentSession) {
  if (!currentGroup.id) $state.go('404');

  $scope.group = currentGroup;
  $scope.currentSession = currentSession;

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

      if (currentSession.id) {
        Group.save(group, function (group) {
          $mdToast.show(
            $mdToast.simple()
              .content('Novo grupo criado com o nome ' + group.name)
              .hideDelay(1000)
          );
        })
      } else {
        $state.go('signUp', {join: currentGroup.id});
      }
    });
  }
}]);
