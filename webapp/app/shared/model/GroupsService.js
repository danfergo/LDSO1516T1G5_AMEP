angular.module('amep-model').
factory('Groups', ['$resource', '$cacheFactory', function ($resource, $cacheFactory) {

  var resource = $resource('/api/v1/groups/');

  return resource;
}]);
