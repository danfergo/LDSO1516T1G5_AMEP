angular.module('amep-agenda').
controller('agendaController', ['$scope', 'Agenda', 'currentSession','prossumerGroups', function ($scope, Agenda, currentSession,prossumerGroups) {

  $scope.weeks = Agenda.query({id: currentSession.id});

  $scope.signedValue = function (value) {

    return (value > 0 ? '+' : '') + value;
  }

  $scope.groups = prossumerGroups;

}]).
directive('owl', function () {
  return {
    scope: false,
    link: function (scope, element) {
      $(element).owlCarousel();
    }
  }
});
