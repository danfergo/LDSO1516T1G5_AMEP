angular.module('amep-prossumer-dashboard', ['amep-model']).
config(function ($stateProvider, $urlRouterProvider) {

  //$urlRouterProvider.when('/', '/agenda');

  $stateProvider.
  state('agenda', {
    parent: 'ls',
    url: 'agenda',
    controller: 'agendaController',
    templateUrl: 'components/p_dashboard/agenda/agenda.html',
    data: {
      permissions: {
        only: ['prossumer'],
        redirectTo: 'login'
      }
    }
  }).
  state('products', {
    parent: 'ls',
    url: 'products',
    controller: 'productsController',
    templateUrl: 'components/p_dashboard/products/products.html',
    resolve: {
      'products': ['Prossumer','currentSession',function(Prossumer,currentSession){
          return Prossumer.Product.query({prossumerId: currentSession.id}).$promise;
      }]
    },
    data: {
      permissions: {
        only: ['prossumer'],
        redirectTo: 'login'
      }
    }
  });
});
