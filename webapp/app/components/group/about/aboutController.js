angular.module('amep-group').
controller('groupAboutController', ['$scope','$mdDialog','$state','currentSession', 'currentAbout', 'Group', function ($scope, $mdDialog,$state,currentSession, currentAbout, Group) {

  $scope.groupProssumers = currentAbout;
  $scope.coordinator = false;

  for(id in currentAbout) {
    if (currentAbout[id].prossumer_id == currentSession.id) {
      $scope.coordinator = currentAbout[id].is_coordinator;
      break;
    }
  }

  $scope.enableCoordinator = function(groupId, groupProssumerId) {
    Group.Prossumer.update({groupId: groupId, prossumerId: groupProssumerId, is_coordinator: true});
  };

  $scope.disableCoordinator = function(groupId, groupProssumerId) {
    Group.Prossumer.update({groupId: groupId, prossumerId: groupProssumerId, is_coordinator: false});
  };

  $scope.enableProssumer = function(groupId, groupProssumerId) {
    Group.Prossumer.update({groupId: groupId, prossumerId: groupProssumerId, state: 2});
  };

  $scope.disableProssumer = function(groupId, groupProssumerId) {
    Group.Prossumer.update({groupId: groupId, prossumerId: groupProssumerId, state: 0, is_coordinator: false});
  };


  $scope.showConfirm = function(ev) {
    var confirm = $mdDialog.confirm()
        .title(ev.title + ev.name +  "?")
        .ariaLabel('Lucky day')
        .targetEvent(ev)
        .ok('Sim!')
        .cancel('Nao');
    $mdDialog.show(confirm).then(function() {
      if(ev.type == "enableCoordinator")
        $scope.enableCoordinator(ev.groupId,ev.groupProssumerId);
      else if(ev.type == "disableCoordinator")
        $scope.disableCoordinator(ev.groupId,ev.groupProssumerId);
      else if(ev.type == "enableProssumer")
        $scope.enableProssumer(ev.groupId,ev.groupProssumerId);
      else if(ev.type == "disableProssumer")
        $scope.disableProssumer(ev.groupId,ev.groupProssumerId);
      $state.reload();
    }, function() {
    });
  };

}]);
