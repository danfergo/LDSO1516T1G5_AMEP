angular.module('amep-model').
factory('City', ['$resource', '$filter', function($resource, $filter) {

  var recource = $resource('/api/v1/cities.json', null, {
    'update': { method:'PUT' }
  });

  recource.getCityByName = function(cities, name) {
    var found = $filter('filter')(cities, {name: name}, true);
    if (found.length) {
      return found[0];
    } else {
      return'Not found';
    }
  };

  recource.getCityById = function(cities, id) {
    var found = $filter('filter')(cities, {id: id}, true);
    if (found.length) {
      return found[0];
    } else {
      return'Not found';
    }
  };

  return recource
}]);
