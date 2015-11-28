angular.module('amep-model').
factory('Prossumer', ['$resource', '$http', function ($resource, $http) {

  var resource = $resource('/api/v1/prossumers/');

  resource.confirmAccount = function (params, successCallback, errorCallback) {
    return $http.get('/api/v1/confirm-account?id='+params.id+'&hash='+params.hash).then(successCallback, errorCallback);
  }


  resource.updateSettings = function (id, data, successCallback, errorCallback) {
    return $http.put('/api/v1/prossumers/'+id, data).then(successCallback, errorCallback);
  }



  return resource;
}]);
