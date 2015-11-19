angular.module('amep-groups').
controller('createGroupController', ['$scope', 'Groups', '$mdDialog', '$mdToast', function ($scope, Groups, $mdDialog, $mdToast) {
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();

  };
  $scope.ok = function() {
    Groups.save($scope.group,function(group){
      $mdToast.show(
        $mdToast.simple()
          .content('Novo grupo criado com o nome ' + group.name)
          .hideDelay(1000)
      );
      $mdDialog.hide();
    });
  };

}]);
