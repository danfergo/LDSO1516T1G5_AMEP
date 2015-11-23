angular.module('amep-model').
factory('Group', ['$resource', function($resource) {
  return $resource('/api/v1/groups/:groupId', null, {
    'update': { method:'PUT' }
  });
}]);
