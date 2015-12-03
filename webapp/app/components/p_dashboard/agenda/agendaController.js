angular.module('amep-prossumer-dashboard').
controller('agendaController',['$scope', 'Agenda', 'currentSession', function ($scope, Agenda, currentSession) {

  $scope.weeks = Agenda.query({id: currentSession.id},
  function(data)
  {

  },
    function(error)
    {

    }
  );

  console.log($scope.weeks.id);

}]);
