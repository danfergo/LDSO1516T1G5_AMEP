angular.module('amep-model').
factory('Product', ['$resource', function ($resource) {

  var resource = $resource('/api/v1/products/:productId', null, {});

  return resource;
}]);
