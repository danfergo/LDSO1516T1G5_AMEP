angular.module('amep-group-page', []).

config(function ($stateProvider) {
  $stateProvider.
  state('group', {
    parent: 'ls',
    url: 'group/{groupId}',
    controller: 'groupController',
    templateUrl: 'components/group_page/layout.html'
  }).
  state('group.showcase', {
    url: '/showcase',
    controller: 'groupShowcaseController',
    templateUrl: 'components/group_page/showcase.html'
  }).
  state('group.history', {
    url: '/showcase',
    controller: 'groupHistoryController',
    templateUrl: 'components/group_page/history.html'
  }).
  state('group.about', {
    url: '/showcase',
    controller: 'groupAboutController',
    templateUrl: 'components/group_page/about.html'
  });
}).
 run(function($rootScope, $state){
  $rootScope.$on('$stateChangeStart',
    function (event, toState, toParams, fromState, fromParams) {
      if(toState.name == "group"){
        event.preventDefault();
        $state.go("group.showcase", toParams);
      }
    })
});
