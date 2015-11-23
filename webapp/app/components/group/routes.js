angular.module('amep-groups', ['amep-model']).
config(function ($stateProvider) {
  $stateProvider.
  state('groups', {
    parent: 'loo',
    url: 'groups',
    controller: 'groupsController',
    templateUrl: 'components/group/groups.html'
  });
});
