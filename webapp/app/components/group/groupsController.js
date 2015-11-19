'use strict';

//noinspection JSUnresolvedFunction
angular.module('amep-groups')
  .controller('groupsController', ['$scope', 'Group', 'City', '$mdDialog', function ($scope, Group,City,$mdDialog) {
    $scope.groups=Group.query();
    $scope.cities=City.query();
    $scope.newGroup = function (event) {
      $mdDialog.show({
          controller: 'createGroupController',
          templateUrl: 'components/group/create-group.html',
          targetEvent: event,
          clickOutsideToClose: true
        })
        .then(function () {
          Group.query(function (groups) {
            $scope.groups = groups;
          });
        });
    };
}]);
