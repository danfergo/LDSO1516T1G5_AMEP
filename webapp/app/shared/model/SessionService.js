angular.module('amep-model', ['ngResource']).
factory('Session', ['$resource','$cacheFactory', function ($resource,$cacheFactory) {



  var interceptor = {
    response: function (response) {
      $cacheFactory.get('$http').remove(response.config.url);
      return response;
    }
  };


  var resource = $resource('/api/v1/session/', null, {
    'get': {
      cache: true
    },
    'update': {method: 'PUT'},
    'delete': { method: 'DELETE', interceptor: interceptor }
  });

  resource.getSessionInCache = function(){
    return $cacheFactory.get('$http').get('/api/v1/session');
  }

  return resource;
}]);
