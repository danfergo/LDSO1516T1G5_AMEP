angular.module('amep-group-page', []).

config(function ($stateProvider, $urlRouterProvider) {
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
        return Group.get({groupId: $stateParams.groupId}).$promise;
      }],
      productCategories: ['ProductCategory', function (ProductCategory) {
        return ProductCategory.query().$promise;
      }],
      prossumerProducts: ['Prossumer', 'currentSession', function (Prossumer, currentSession) {
        return Prossumer.Product.query({prossumerId:currentSession.id}).$promise;
      }]
    },
    data :{
      tabIndex: 0
    }
  }).
  state('showcase', {
    parent: 'group',
    url: '/showcase',
    controller: 'groupShowcaseController',
    templateUrl: 'components/group_page/showcase.html',
    data: {
      tabIndex: 0
    }
  }).
  state('history', {
    parent: 'group',
    url: '/history',
    controller: 'groupHistoryController',
    templateUrl: 'components/group_page/history.html',
    data :{
      tabIndex: 1
    }
  }).
  state('cicle', {
    parent: 'group',
    url: '/cicle',
    controller: 'groupCicleController',
    templateUrl: 'components/group_page/cicle.html',
    data :{
      tabIndex: 2
    }
  }).
  state('about', {
    parent: 'group',
    url: '/about',
    controller: 'groupAboutController',
    templateUrl: 'components/group_page/about.html',
    data :{
      tabIndex: 3
    }
  });
});
