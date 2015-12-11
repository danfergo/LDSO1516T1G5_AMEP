angular.module('amep-search-groups', ['amep-model']).
config(function ($stateProvider) {
  $stateProvider.
  state('groups', {
    parent: 'loo',
    url: 'groups',
    controller: 'searchGroupsController',
    templateUrl: 'components/search-groups/searchGroups.html'
  });
});
