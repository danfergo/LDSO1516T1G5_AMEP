angular.module('amep-prossumer-dashboard', ['amep-model']).
config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.when('/', '/agenda');

  $stateProvider.
  state('agenda', {
    url: '/agenda',
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
    url: '/products',
    controller: 'productsController',
    templateUrl: 'components/p_dashboard/products/products.html',
    data: {
      permissions: {
        only: ['prossumer'],
        redirectTo: 'login'
      }
    }
  });
});
