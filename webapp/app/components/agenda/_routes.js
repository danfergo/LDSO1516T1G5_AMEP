angular.module('amep-agenda', ['amep-model']).
config(function ($stateProvider) {

  $stateProvider.
  state('agenda', {
    parent: 'ls',
    url: 'agenda',
    controller: 'agendaController',
    templateUrl: 'components/agenda/agenda.html',
    data: {
      permissions: {
        only: ['prossumer'],
        redirectTo: 'login'
      }
    },
    resolve:{
      prossumerGroups: ['Prossumer','currentSession',function(Prossumer, currentSession){
        return Prossumer.Group.query({prossumerId: currentSession.id}).$promise;
      }]
    }
  });
});
