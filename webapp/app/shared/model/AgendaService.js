angular.module('amep-model').
factory('Agenda', ['$resource', '$http', function ($resource, $http) {

  var resource = $resource('/api/v1/prossumers/:id/agenda', null, {
    'query': { method:'GET',
      params: {id: '@id'}}
  });

  return resource;
}]);
