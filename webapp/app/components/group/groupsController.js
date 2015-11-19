'use strict';

//noinspection JSUnresolvedFunction
angular.module('amep-groups')

  .service('Group', function () { /* ... */ })
  .controller('groupsController', ['$scope', 'Group', 'City', function ($scope, Group,City) {
    $scope.groups=Group.query();
    $scope.cities=City.query();

  }]);
