angular.module('amep-model').
factory('Agenda', ['$resource', '$http', function ($resource, $http) {

  var resource = $resource('/api/v1/prossumers/:id/agenda', null, {});

  return resource;
}]);
