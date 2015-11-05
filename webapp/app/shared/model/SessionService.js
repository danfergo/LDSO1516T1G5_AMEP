angular.module('amep-model', ['ngResource']).
factory('Session', ['$resource', function ($resource) {
  return $resource('/api/session/', null, {
    'update': {method: 'PUT'}
  });
}]);
