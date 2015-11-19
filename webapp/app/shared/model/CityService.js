angular.module('amep-model').
factory('City', ['$resource', function($resource) {
  return $resource('/api/v1/cities.json', null, {
    'update': { method:'PUT' }
  });
}]);
