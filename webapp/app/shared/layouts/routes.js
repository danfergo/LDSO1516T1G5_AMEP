angular.module('amep-layouts',['amep-toolbar','amep-sidebar']).
config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider.
  state('ls', {
    url: '/',
    abstract:true,
    templateUrl: 'shared/layouts/sidebar.html',
    /*data: {
     permissions: {
     only: ['prossumer'],
     redirectTo: 'login'
     }
     }*/
  }).
  state('lt', {
    url: '/',
    abstract:true,
    templateUrl: 'shared/layouts/toolbar.html',
    /*data: {
     permissions: {
     only: ['prossumer'],
     redirectTo: 'login'
     }
     }*/
  });
});
