angular.module('amep-group', []).

config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('/group/:groupId', '/group/:groupId/showcase');
  $urlRouterProvider.when('/group/:groupId/', '/group/:groupId/showcase');


  $stateProvider.
  state('group', {
    parent: 'loo',
    url: 'group/{groupId}',
    controller: 'groupController',
    templateUrl: 'components/group/group.html',
    resolve: {
      currentGroup: ['Group', '$stateParams', function (Group, $stateParams) {
        return Group.get({groupId: $stateParams.groupId}).$promise;
      }],
      productCategories: ['ProductCategory', function (ProductCategory) {
        return ProductCategory.query().$promise;
      }],
      prossumerProducts: ['Prossumer', 'currentSession', function (Prossumer, currentSession) {
        if (!currentSession.id) return [];
        return Prossumer.Product.query({prossumerId: currentSession.id}).$promise;
      }]
    },
    data: {
      tabIndex: 0
    }
  }).
  state('showcase', {
    parent: 'group',
    url: '/showcase',
    controller: 'groupShowcaseController',
    templateUrl: 'components/group/showcase/showcase.html',
    data: {
      tabIndex: 0
    },
    resolve: {
      currentCycles: ['Cycle', 'currentGroup', function (Cycle, currentGroup) {
        return Cycle.query({groupId: currentGroup.id}).$promise;
      }],
      productAuths: ['Group', 'currentGroup', function (Group, currentGroup, currentSession) {
        return Group.ProductAuth.query({groupId: currentGroup.id}).$promise;
      }]
    },
  }).
  state('cycles', {
    parent: 'group',
    url: '/cycles',
    controller: 'groupHistoryController',
    templateUrl: 'components/group/cycles/cycles.html',
    resolve: {
      currentCycles: ['Cycle', 'currentGroup', function (Cycle, currentGroup) {
        return Cycle.query({groupId: currentGroup.id}).$promise;
      }]
    },
    data: {
      tabIndex: 1
    }
  }).
  state('about', {
    parent: 'group',
    url: '/about',
    controller: 'groupAboutController',
    templateUrl: 'components/group/about/about.html',
    resolve: {
      currentAbout: ['Group', 'currentGroup', function (Group, currentGroup) {
        return  Group.Prossumer.query({groupId: currentGroup.id}).$promise;
      }]
    },
    data: {
      tabIndex: 2
    }
  }).
  state('stats', {
    parent: 'group',
    url: '/stats',
    controller: 'groupStatsController',
    templateUrl: 'components/group/stats/stats.html',
    resolve: {
      currentStats: ['Group', 'currentGroup', function (Group, currentGroup) {
        return Group.Stats.query({groupId: currentGroup.id}).$promise;
      }]
    },
    data: {
      tabIndex: 3
    }
  });
});
