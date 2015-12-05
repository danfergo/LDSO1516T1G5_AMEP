angular.module('amep-model').
factory('Cycle', ['$resource', '$filter', function ($resource, $filter) {

  var resource = $resource('/api/v1/groups/:groupId/cycles', null);

  /**
   *
   * @param cycle - a cycle object
   * @returns {string, null} - unborn, supplying, buying, happening, ended
   */
  resource.whatState = function (cycle) {
    if (!cycle || !cycle.start_time) return null;

    var now = moment();
    var start = moment(cycle.start_time);
    var end = moment(cycle.end_time);
    var oneWeekBefore = moment(cycle.start_time).subtract(7, 'days');
    var twoWeeksBefore = moment(cycle.start_time).subtract(14, 'days');

    if (now < twoWeeksBefore) {
      return 'unborn';
    } else if (now <= oneWeekBefore) {
      return 'supplying';
    } else if (now < start) {
      return 'buying';
    } else if (now > end) {
      return 'ended';
    } else {
      return 'happening';
    }

  }

  /**
   *
   * @param cycle
   * @returns {boolean}
   */
  resource.isInSupplyingOrInBuying = function (cycle) {
    var state = resource.whatState(cycle);
    return state == 'supplying' || state == 'buying';
  }

  resource.firstAvailable = function (cycles) {
    var c = $filter('filter')(cycles, function (cycle) {
      return resource.isInSupplyingOrInBuying(cycle);
    });
    return c.length > 0 ? c[0] : null;
  }

  return resource;
}]);
