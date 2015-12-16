angular.module('amep-group').
controller('groupAboutController', ['$scope', 'currentSession', 'currentAbout', 'Group', function ($scope, currentSession, currentAbout, Group) {

  $scope.groupProssumers = currentAbout;
  $scope.coordinator = false;

  for(id in currentAbout) {
    if (currentAbout[id].prossumer_id == currentSession.id) {
      $scope.coordinator = currentAbout[id].is_coordinator;
      break;
    }
  }

  $scope.turnCoordinator = function(groupId, groupProssumerId) {

    Group.Prossumer.update({group_id: groupId, id: groupProssumerId, is_coordinator: 'true'});
  }

}]);
