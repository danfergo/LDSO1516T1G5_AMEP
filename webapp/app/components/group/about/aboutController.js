angular.module('amep-group').
controller('groupAboutController', ['$scope', '$mdDialog', '$state', 'currentSession', 'currentAbout', 'Group', function ($scope, $mdDialog, $state, currentSession, currentAbout, Group) {

  $scope.groupProssumers = currentAbout;
  $scope.coordinator = false;

  $scope.currentSessionId = currentSession.id

  for (id in currentAbout) {
    if (currentAbout[id].prossumer_id == currentSession.id) {
      $scope.coordinator = currentAbout[id].is_coordinator;
      break;
    }
  }

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
