angular.module('amep-auth', ['amep-model']).
config(function ($stateProvider) {
  $stateProvider.
  state('login', {
    url: '/login',
    controller: 'loginController',
    templateUrl: 'components/auth/loginView.html',
    /** data: {
        permissions: {
          only: ['user'],
          redirectTo: 'login'
        }
      } **/
  });
});
