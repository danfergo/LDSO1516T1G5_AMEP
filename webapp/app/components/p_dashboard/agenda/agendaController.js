angular.module('amep-prossumer-dashboard').
controller('agendaController',['$scope', 'Agenda', function ($scope, Agenda) {

  $scope.weeks = Agenda.query();

  console.log($scope.weeks.id);

}]);
