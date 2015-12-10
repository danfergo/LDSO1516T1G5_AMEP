angular.module('amep-group-page').
controller('groupController', ['$scope', '$state', 'currentGroup', '$mdDialog', 'Group', 'productCategories', 'prossumerProducts', 'currentSession', '$mdToast',
  function ($scope, $state, currentGroup, $mdDialog, Group, productCategories, prossumerProducts, currentSession, $mdToast) {
    if (!currentGroup.id) $state.go('404');
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
      $scope.selectedTab = toState.data.tabIndex;
    });

    $scope.Group = Group;
    $scope.productCategories = productCategories;
    $scope.prossumerProducts = prossumerProducts;

    $scope.group = currentGroup;
    $scope.currentSession = currentSession;
    $scope.prossumerState = false;


    function getCurrentProssumerState() {
      Group.Prossumer.get({groupId: $scope.group.id, prossumerId: $scope.currentSession.id}, function (state) {
        $scope.prossumerState = state;
      })
    }

    if (currentSession.id) getCurrentProssumerState();


    $scope.joinGroup = function (ev) {
      var message = 'A tua adesão ficará pendente da confirmação dos responsáveis do grupo.<br>Se ainda não o fizeste sugerimos-te que entres em contacto com os <br>responsáveis do grupo e te apresentes.';

      var confirm = $mdDialog.confirm()
        .title('Estás prestes juntar-te ao grupo "' + $scope.group.name + '"')
        .htmlContent(message)
        .ariaLabel('Novo grupo')
        .targetEvent(ev)
        .cancel('Cancelar')
        .ok('Confirmar');

      $mdDialog.show(confirm).then(function () {

        Group.Prossumer.save({}, {groupId: $scope.group.id}, function (group) {
          getCurrentProssumerState();
          $mdToast.show(
            $mdToast.simple()
              .content('Pedido de adesão enviado ')
              .hideDelay(1000)
          );
        })

      });
    }

    $scope.msgJoinGroupPending = function (ev) {
      var message = 'A tua adesão está pendente da confirmação dos responsáveis do grupo.<br>Se ainda não o fizeste sugerimos-te que entres em contacto com os <br>responsáveis do grupo e te apresentes.';

      var dialog = $mdDialog.alert()
        .title('A tua adesão ao "' + $scope.group.name + '" aguarda confirmação')
        .htmlContent(message)
        .ariaLabel('Adesão a grupo pendente')
        .targetEvent(ev)
        .ok('Fechar');

      $mdDialog.show(dialog);
    }

  }]);
