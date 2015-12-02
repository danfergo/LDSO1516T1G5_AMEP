angular.module('amep-model').
factory('Prossumer', ['$resource', '$http', function ($resource, $http) {

  var resource = $resource('/api/v1/prossumers/:id', null, {
    'update': { method:'PUT',
    params: {id: '@id'}}
  });


  resource.confirmAccount = function (params, successCallback, errorCallback) {
    return $http.get('/api/v1/confirm-account?id='+params.id+'&hash='+params.hash).then(successCallback, errorCallback);
  }

  return resource;
}]);
