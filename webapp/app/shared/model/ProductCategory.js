angular.module('amep-model').
factory('ProductCategory', ['$resource', function ($resource) {

  var resource = $resource('/api/v1/product_categories/:productCategoryId', null, {});

  return resource;
}]);
