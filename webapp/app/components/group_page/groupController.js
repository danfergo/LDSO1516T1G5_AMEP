angular.module('amep-group-page').
controller('groupController', ['$scope', '$state', 'currentGroup', '$mdDialog', function ($scope, $state, currentGroup, $mdDialog) {
  if (!currentGroup.id) $state.go('404');

  $scope.group = currentGroup;

  $scope.joinGroup = function (ev) {
    console.log('xx');
    var confirm = $mdDialog.confirm()
      .title('Estás prestes a aderir ao grupo "' + $scope.group.name + '"')
      .content('Se ainda não o fizeste sugerimos-te que entres em contacto com os <br>responsáveis do grupo e te apresentes.')
      .ariaLabel('Lucky day')
      .targetEvent(ev)
      .cancel('Cancelar')
      .ok('Confirmar');

    $mdDialog.show(confirm).then(function () {

    });
  }
}]);
