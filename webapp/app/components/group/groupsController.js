'use strict';

//noinspection JSUnresolvedFunction
angular.module('amep-groups')
  .config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('input', 'default')
      .primaryPalette('grey')
  })
  .controller('groupsController', ['$scope', 'Group', 'City', 'currentSession', '$mdDialog', function ($scope, Group, City, currentSession, $mdDialog) {
    $scope.groups = Group.query();
    $scope.cities = City.query();

    $scope.getCityById = function (id) {
      return City.getCityById($scope.cities, id);
    };

    $scope.loggedIn = function () {
      return !!currentSession.id;
    };

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
