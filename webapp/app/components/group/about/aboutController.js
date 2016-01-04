angular.module('amep-group').
controller('groupAboutController', ['$scope', '$mdDialog', '$state', 'prossumerState', 'currentAbout', function ($scope, $mdDialog, $state, prossumerState, currentAbout) {

  $scope.groupProssumers = currentAbout;
  $scope.coordinator = prossumerState.is_coordinator;
  $scope.currentSessionId = prossumerState.prossumer_id;

  function enableCoordinator (groupId, groupProssumerId) {
    Group.Prossumer.update({groupId: groupId, prossumerId: groupProssumerId, is_coordinator: true});
  };

  function disableCoordinator (groupId, groupProssumerId) {
    Group.Prossumer.update({groupId: groupId, prossumerId: groupProssumerId, is_coordinator: false});
  };

  function enableProssumer (groupId, groupProssumerId) {
    Group.Prossumer.update({groupId: groupId, prossumerId: groupProssumerId, state: 2});
  };

  function disableProssumer (groupId, groupProssumerId) {
    Group.Prossumer.update({groupId: groupId, prossumerId: groupProssumerId, state: 0, is_coordinator: false});
  };

  $scope.showConfirm = function (ev) {
    var confirm = $mdDialog.confirm()
      .title(ev.title + ev.name + "?")
      .ariaLabel('Lucky day')
      .targetEvent(ev)
      .ok('Sim')
      .cancel('Nao');
    $mdDialog.show(confirm).then(function () {
      if (ev.type == "enableProssumer")
        enableProssumer(ev.groupId, ev.groupProssumerId);
      else if (ev.type == "disableProssumer")
        disableProssumer(ev.groupId, ev.groupProssumerId);
      $state.reload();
    }, function () {
    });
  };

  $scope.changeCoordinator = function (isCoordinator, groupId, groupProssumerId) {
    if (isCoordinator)
      enableCoordinator(groupId, groupProssumerId);
    else {
      disableCoordinator(groupId, groupProssumerId);
    }
  }

}]);
