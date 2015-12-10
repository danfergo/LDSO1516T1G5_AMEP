angular.module('amep-model').
factory('Group', ['$resource', function ($resource) {

  var resource = $resource('/api/v1/groups/:groupId', null);
  resource.Prossumer = $resource('/api/v1/groups/:groupId/prossumers/:prossumerId', null, {
    save: {
      method: 'POST',
      params: {groupId: '@groupId'}
    }
  });
  resource.Prossumer.isNotInTheGroup = function (state) {
    return state && !state.prossumer_id;
  }
  resource.Prossumer.isWaitingAcceptance = function (state) {
    return state && state.state == 1;
  }
  resource.Prossumer.isActive = function (state) {
    return state && state.state == 2;
  }

  resource.ProductAuth = $resource('/api/v1/groups/:groupId/products_auths/:id');
  resource.Cycle = $resource('/api/v1/groups/:groupId/cycles/:id');
  resource.Cycle.Product = $resource('/api/v1/groups/:groupId/cycles/:cycleId/products/:id', null, {
    'save': {method: 'PUT'},
    'delete': {method: 'DELETE', isArray: true}
  });

  resource.Cycle.Product.productSellingPrice = function (product) {
    for (var w in product.weeks) {
      if (product.weeks[w].stock != null) {
        return {
          ecos: product.weeks[w].stock.unit_price_ecos,
          euros: product.weeks[w].stock.unit_price_euros
        }
      }
    }
    return undefined;
  }


  resource.Cycle.Week = $resource('/api/v1/groups/:groupId/cycles/:cycleId/weeks');

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
