angular.module('amep-model').
factory('Prossumer', ['$resource', '$http', function ($resource, $http) {

  var resource = $resource('/api/v1/prossumers/');

  resource.confirmAccount = function (params) {
    return $http({method: 'GET', url: '/api/v1/confirm-account/', data: params})
  }

  return resource;
}]);
