"use strict";

angular.module('amep-group').
controller('groupHistoryController', ['$scope', 'Group', 'Cycle', 'currentGroup', 'currentCycles', 'ngTableParams', '$mdDialog',
  function ($scope, Group, Cycle, currentGroup, currentCycles, ngTableParams, $mdDialog) {

    $scope.whatState = Cycle.whatState;

    $scope.cycles = currentCycles;
    $scope.cycleSelected = $scope.cycles[0];

    $scope.mudaSemana = function () {
      $scope.getWeeks = Group.Cycle.Week.query({
        groupId: $scope.cycleSelected.group_id,
        cycleId: $scope.cycleSelected.id
      });
    };
    $scope.mudaSemana();

    $scope.pdfCycle = function () {

      Cycle.getPdf.pdf({
        groupId: $scope.cycleSelected.group_id,
        cycleId: $scope.cycleSelected.id
      });
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
