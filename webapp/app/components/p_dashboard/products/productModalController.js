angular.module('amep-prossumer-dashboard').
controller('productModalController', ['$scope', 'Session', '$mdDialog', function ($scope, Session, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
}]);
