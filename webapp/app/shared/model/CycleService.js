angular.module('amep-model').
factory('Cycle', ['$resource', function ($resource) {

  var resource = $resource('/api/v1/groups/:groupId/cycles', null);
  return resource;
}]);
