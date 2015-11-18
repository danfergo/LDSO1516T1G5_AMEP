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
    controller: 'showcaseController',
    templateUrl: 'components/group_page/showcase.html'
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
