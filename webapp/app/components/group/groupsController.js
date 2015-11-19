angular.module('amep-groups').
controller('groupsController', ['$scope', 'Groups', '$mdDialog', '$stateParams', function ($scope, Groups, $mdDialog) {

  $scope.groups = Groups.query();

  $scope.newGroup = function (event) {
    $mdDialog.show({
        controller: 'createGroupController',
        templateUrl: 'components/group/create-group.html',
        targetEvent: event,
        clickOutsideToClose: true
      })
      .then(function () {
        Groups.query(function (groups) {
          $scope.groups = groups;
        });
      });
  };
}]);
