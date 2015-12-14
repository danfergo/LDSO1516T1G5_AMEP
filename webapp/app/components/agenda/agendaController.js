angular.module('amep-agenda').
controller('agendaController', ['$scope', 'Agenda', 'currentSession', function ($scope, Agenda, currentSession) {

  $scope.weeks = Agenda.query({id: currentSession.id},
    function (data) {


    },
    function (error) {

    }
  );


  $scope.signedValue = function(value) {

    return (value > 0 ? '+' : '') + value;
  }


}]);
