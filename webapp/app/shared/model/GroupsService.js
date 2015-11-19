angular.module('amep-model').
factory('Group', ['$resource', function($resource) {
  return $resource('/api/v1/groups.json', null, {
    'update': { method:'PUT' }
  });
}]);
