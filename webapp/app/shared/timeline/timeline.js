"use strict";
angular.module('timeline', ['ngMaterial'])

.directive('timeline', [function(){
  function controller($scope, Group){


    $scope.diffBefore = moment($scope.bla.start_time).subtract(2,'weeks');
    var myDate= new Date($scope.diffBefore);
    $scope.diffBeforeString = (myDate.getDate()) + "-" + (myDate.getMonth()+1) + "-" + myDate.getFullYear();

    $scope.getPosition = function(date){

      if($scope.estado == 'supplying' || $scope.estado == 'buying'){
        $scope.myDiff = moment($scope.bla.end_time).diff($scope.diffBefore, 'days');
        $scope.myCurDiff = moment(date).diff(moment($scope.diffBefore),'days');
      }
      else{
        $scope.myDiff = moment($scope.bla.end_time).diff($scope.bla.start_time, 'days');
        $scope.myCurDiff = moment(date).diff(moment($scope.bla.start_time),'days');
      }

      $scope.myCurDiff = Math.max(0, $scope.myCurDiff);
      return ( ($scope.myCurDiff/$scope.myDiff) * 100);
    };

    $scope.getWeeks = Group.Cycle.Week.query({groupId: $scope.bla.group_id, cycleId: $scope.bla.id});
    $scope.$watch(function(){
      return $scope.bla;
    },function(){
      $scope.getWeeks = Group.Cycle.Week.query({groupId: $scope.bla.group_id, cycleId: $scope.bla.id});
      $scope.diffBefore = moment($scope.bla.start_time).subtract(2,'weeks');
      var myDate= new Date($scope.diffBefore);
      $scope.diffBeforeString = (myDate.getDate()) + "-" + (myDate.getMonth()+1) + "-" + myDate.getFullYear();
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
      'estado' : '='
    },
    templateUrl: 'shared/timeline/timeline.html'
  };

}]);
