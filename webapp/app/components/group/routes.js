angular.module('amep-groups', []).
config(function ($stateProvider) {
  $stateProvider.
  state('groups', {
    parent: 'lt',
    url: 'groups',
    controller: 'groupsController',
    templateUrl: 'components/group/groups.html'
  });
});
