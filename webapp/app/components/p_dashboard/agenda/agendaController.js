angular.module('amep-prossumer-dashboard').
controller('agendaController', ['$scope', 'Agenda', 'currentSession', function ($scope, Agenda, currentSession) {

  $scope.weeks = Agenda.query({id: currentSession.id},
    function (data) {


    },
    function (error) {

    }
  );

  $scope.balanceEuros = function(week) {

    var balance = 0;

    for (id in week.sales)
      balance += week.sales[id].quantity * week.sales[id].stock.unit_price_euros;

    for (id in week.purchases)
      balance -= week.purchases[id].quantity * week.purchases[id].stock.unit_price_euros;

    return balance;
  }

  $scope.balanceEcos = function(week) {

    var balance = 0;

    for (id in week.sales)
      balance += week.sales[id].quantity * week.sales[id].stock.unit_price_ecos;

    for (id in week.purchases)
      balance -= week.purchases[id].quantity * week.purchases[id].stock.unit_price_ecos;

    return balance;
  }

}])
;
