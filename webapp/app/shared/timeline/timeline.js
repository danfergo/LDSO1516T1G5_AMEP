"use strict";
angular.module('timeline', ['ngMaterial'])

.directive('timeline', [function(){
  function controller($scope, Group){
    $scope.getPosition = function(date){
      var myDiff = moment($scope.bla.end_time).diff(moment($scope.bla.start_time), 'days');
      var myCurDiff = moment(date).diff(moment($scope.bla.start_time),'days');
      myCurDiff = Math.max(0, myCurDiff);
      return ( (myCurDiff/myDiff) * 100);
    };

    $scope.getWeeks = Group.Cycle.Week.query({groupId: $scope.bla.group_id, cycleId: $scope.bla.id});
    $scope.$watch(function(){
      return $scope.bla;
    },function(){
      $scope.getWeeks = Group.Cycle.Week.query({groupId: $scope.bla.group_id, cycleId: $scope.bla.id});
    });
    $scope.hoverIn = function(){
        this.hoverEdit = true;
    };

    $scope.hoverOut = function(){
        this.hoverEdit = false;
    };
  }
  return {
    restrict: 'AE',
    controller: controller,
    scope: {
      'bla':'=',
      'events' : '='
    },
    templateUrl: 'shared/timeline/timeline.html'
  };

}]);
