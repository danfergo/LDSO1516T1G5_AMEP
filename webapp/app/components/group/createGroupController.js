angular.module('amep-groups').
controller('createGroupController', ['$scope', 'Group', 'City', '$mdDialog', '$mdToast', function ($scope, Group, City, $mdDialog, $mdToast) {
  $scope.cities = City.query(function (cities) {
    $scope.defaultCity = cities[0].name;
  });

  $scope.hide = function () {
    $mdDialog.hide();
  };
  $scope.cancel = function () {
    $mdDialog.cancel();
  };
  $scope.ok = function () {
    Group.save($scope.group, function (group) {
      $mdToast.show(
        $mdToast.simple()
          .content('Novo grupo criado com o nome ' + group.name + '.')
          .hideDelay(1000)
      );
      $mdDialog.hide();
    });
  };

}]);
