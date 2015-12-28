angular.module('amep-products', ['amep-model','ngFileUpload']).
config(function ($stateProvider) {

  $stateProvider.
  state('products', {
    parent: 'ls',
    url: 'products',
    controller: 'productsController',
    templateUrl: 'components/products/products.html',
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
