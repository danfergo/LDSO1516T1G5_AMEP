"use strict";

angular.module('amep-group').
controller('groupHistoryController', ['$scope', 'Group', 'prossumerState', 'Cycle','currentGroup','currentSession', 'currentCycles', 'ngTableParams', '$mdDialog',
  function ($scope, Group, prossumerState, Cycle, currentGroup,currentSession ,currentCycles, ngTableParams, $mdDialog) {

    $scope.whatState = Cycle.whatState;
    $scope.coordinator = prossumerState.is_coordinator;

    $scope.cycles = currentCycles;
    $scope.cycleSelected = $scope.cycles[0];

    $scope.mudaSemana = function () {
      $scope.getWeeks = Group.Cycle.Week.query({
        groupId: $scope.cycleSelected.group_id,
        cycleId: $scope.cycleSelected.id
      });
    };
    $scope.mudaSemana();

    $scope.pdfCycleGroup = function () {

      Cycle.getPdf.pdf({
        groupId: $scope.cycleSelected.group_id,
        cycleId: $scope.cycleSelected.id
      });
    };

    $scope.pdfCycleMine = function () {

      Cycle.getPdf.pdf({
        groupId: $scope.cycleSelected.group_id,
        cycleId: $scope.cycleSelected.id,
        prossumerId: currentSession.id
      });
    };

    $scope.openMenu = function($mdOpenMenu, ev) {
      $mdOpenMenu(ev);
    };

    var self = this;
    var data = [{name: "Moroni", age: 50}, {name: "Moni", age: 45} /*,*/];
    self.tableParams = new ngTableParams({}, {getData: data});


    $scope.createCycle = function (event) {
      $mdDialog.show({
          controller: 'createCycleController',
          templateUrl: 'components/group/cycles/createCycle.html',
          targetEvent: event,
          clickOutsideToClose: true,
          resolve: {
            currentGroup: function () {
                return currentGroup;
            }
          }
        })
        .then(function () {
          Group.query(function (groups) {
            $scope.groups = groups;
          });
        });
    };

  }]);
