angular.module('amep-model').
factory('Group', ['$resource', function ($resource) {

  var resource = $resource('/api/v1/groups/:groupId', null);
  resource.Prossumer = $resource('/api/v1/groups/:groupId/prossumers/:prossumerId',null, {
    save: {
      method: 'POST',
      params: {groupId: '@groupId'}
    }
  });

  resource.Cycle = $resource('/api/v1/groups/:groupId/cycles/:id');
  resource.Cycle.Product = $resource('/api/v1/groups/:groupId/cycles/:cycleId/products');

  /**
   * finds prossumer state in a group
   * 0 - banned/suspended
   * 1 - pending acceptance
   * 2 - ok
   *
   * @param group - group data object
   * @param id - prossumer id
     */
  resource.getProssumerState = function (group, id) {
    return group.groups_prossumers.find(function (prossumerState) {
      if (prossumerState.prossumer_id == id) {
        return prossumerState
      }
      return false;
    });
  }



  return resource;
}]);
