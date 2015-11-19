<<<<<<< HEAD
'use strict';

//noinspection JSUnresolvedFunction
angular.module('amep-groups')

  .service('Group', function () { /* ... */ })
  .controller('groupsController', ['$scope', 'Group', 'City', function ($scope, Group,City) {
    $scope.groups=Group.query();
    $scope.cities=City.query();

  }]);
=======
angular.module('amep-groups').
controller('groupsController', ['$scope', 'Groups', '$mdDialog', function ($scope, Groups, $mdDialog) {
<<<<<<< HEAD

  $scope.groups = Groups.query();

=======

  $scope.groups = Groups.query();

>>>>>>> master
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
>>>>>>> master
