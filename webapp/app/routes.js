angular.module('amep').
config(function ($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/404');
}).
run(['$rootScope', '$state', function ($rootScope, $state) {
  $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
    switch (error.status) {
      case 404:
        $state.go('404');
        break;
      case 401:
        $state.go('401');
        break;
      default:
        $state.go('500');
        break;
    }
  });
}]);


