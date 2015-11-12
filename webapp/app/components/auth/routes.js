angular.module('amep-auth', ['amep-model']).
controller('logoutController', ['Session', '$state', function (Session, $state) {

  Session.delete(function () {
    $state.go('login');
  });

}]).
config(function ($stateProvider) {
  $stateProvider.
  state('login', {
    parent: 'lt',
    url: 'login',
    controller: 'loginController',
    templateUrl: 'components/auth/login.html',
    data: {
      permissions: {
        except: ['prossumer'],
        redirectTo: 'agenda'
      }
    }
  }).
  state('signUp', {
    parent: 'lt',
    url: 'signup',
    controller: 'signUpController',
    templateUrl: 'components/auth/signUp.html',
    data: {
      permissions: {
        except: ['prossumer'],
        redirectTo: 'agenda'
      }
    }
  }).
  state('logout', {
    parent: 'lt',
    url: 'logout',
    controller: 'logoutController',
    data: {
      permissions: {
        only: ['prossumer'],
        redirectTo: 'login'
      }
    }
  }).
  state('confirmAccount', {
    parent: 'lt',
    url: 'confirm-account?id&hash',
    controller: 'confirmAccountController',
    data: {
      permissions: {
        except: ['prossumer'],
        redirectTo: 'agenda'
      }
    }
  });
});
