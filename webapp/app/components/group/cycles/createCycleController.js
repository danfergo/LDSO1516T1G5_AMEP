angular.module('amep-group').
controller('createCycleController', ['$scope', 'Group', 'currentGroup','$mdDialog', function ($scope, Group, currentGroup,$mdDialog) {
  $scope.cycle = {};
  $scope.cycle.weeks = [];


  $scope.genWeeks = function () {
    $scope.cycle.weeks = [];
    for (var i = 0; i < $scope.nWeeks; i++) {
      $scope.cycle.weeks.push({location: null, delivery_date: null});
    }
  }

  $scope.ok = function () {
    Group.Cycle.save({groupId: currentGroup.id}, $scope.cycle, function (cycle) {
      console.log(cycle);
      $mdDialog.hide();

    });
  }


  $scope.cancel = function() {
    $mdDialog.cancel();
  };

}]);
