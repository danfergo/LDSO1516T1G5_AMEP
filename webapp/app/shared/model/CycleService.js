angular.module('amep-model').
factory('Cycle', ['$resource', '$filter', function ($resource, $filter) {

  var resource = $resource('/api/v1/groups/:groupId/cycles', null);

  /**
   *
   * @param cycle - a cycle object
   * @returns {string, null} - unborn, supplying, buying, happening, ended
   */
 resource.getPdf = $resource('/api/v1/groups/:groupId/cycles/:cycleId/pdf/:prossumerId', null ,{
    pdf: {
      method: 'GET',
      headers: {
        accept: 'application/pdf'
      },
      responseType: 'arraybuffer',
      cache: false,
      transformResponse: function (data,headers) {
        var pdf;
        var header = headers('Content-Disposition');
        var array = header.split('"');
        if (data) {
          pdf = new Blob([data], {
            type: 'application/pdf'
          });
          saveAs(pdf,array[1]);
          return true;
        }
        return false;

      }
    }
  })



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
