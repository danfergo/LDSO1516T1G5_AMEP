angular.module('amep-group-page', []).

config(function ($stateProvider,$urlRouterProvider) {
  $urlRouterProvider.when('/group/:groupId', '/group/:groupId/showcase');
  $urlRouterProvider.when('/group/:groupId/', '/group/:groupId/showcase');


  $stateProvider.
  state('group', {
    parent: 'loo',
    url: 'group/{groupId}',
    controller: 'groupController',
    templateUrl: 'components/group_page/layout.html',
    resolve: {
      currentGroup: ['Group', '$stateParams', function (Group, $stateParams) {
        return Group.get({groupId: $stateParams.groupId }).$promise;
      }]
    }
  }).
  state('showcase', {
    parent: 'group',
    url: '/showcase',
    controller: 'groupShowcaseController',
    templateUrl: 'components/group_page/showcase.html'
  }).
  state('history', {
    parent: 'group',
    url: '/history',
    controller: 'groupHistoryController',
    templateUrl: 'components/group_page/history.html'
  }).
  state('cicle', {
    parent: 'group',
    url: '/cicle',
    controller: 'groupCicleController',
    templateUrl: 'components/group_page/cicle.html'
  }).
  state('about', {
    parent: 'group',
    url: '/about',
    controller: 'groupAboutController',
    templateUrl: 'components/group_page/about.html'
  });
});
