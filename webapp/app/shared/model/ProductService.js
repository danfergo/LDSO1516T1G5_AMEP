angular.module('amep-model').
factory('Product', ['$resource', '$cacheFactory', function ($resource, $cacheFactory) {

  var resource = $resource('/api/v1/products/', null, {});

  return resource;
}]);
