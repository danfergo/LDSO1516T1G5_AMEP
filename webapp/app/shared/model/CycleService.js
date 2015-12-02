angular.module('amep-model').
factory('Cycle', ['$resource', function ($resource) {

  var resource = $resource('/api/v1/cycles/:cycleId', null);
  return resource;
}]);
