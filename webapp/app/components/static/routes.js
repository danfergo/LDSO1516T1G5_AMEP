angular.module('amep-static',[]).
config(function ($stateProvider) {

  $stateProvider.
  state('index', {
    parent: 'lt',
    url: '',
    templateUrl: 'components/static/promo/index.html',
    controller: 'indexController',
    data: {
      permissions: {
        except: ['prossumer'],
        redirectTo: 'agenda'
      }
    }
  }).
  state('home', {
    parent: 'lt',
    url: 'home', // /home
    templateUrl: 'components/static/promo/index.html'
  })



});
