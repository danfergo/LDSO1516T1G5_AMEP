angular.module('amep-model').
factory('Product', ['$resource', function ($resource) {

  var resource = $resource('/api/v1/products/:productId', null, {});
<<<<<<< HEAD
=======


  resource.filterBySessionId = function (products, id) {
    return products.filter(function (element) {
      return element.prossumer_id != id ? false : element;
    })
  }

  resource.filterById = function (products, id) {
    var p = products.filter(function (element) {
      return element.id != id ? false : element;
    })
    return p.length > 0 ? p[0] : null;
  }
>>>>>>> master


  resource.filterBySessionId = function (products, id) {
    return products.filter(function (element) {
      return element.prossumer_id != id ? false : element;
    })
  }

  resource.filterById = function (products, id) {
    var p = products.filter(function (element) {
      return element.id != id ? false : element;
    })
    return p.length > 0 ? p[0] : null;
  }

  return resource;
}]);
