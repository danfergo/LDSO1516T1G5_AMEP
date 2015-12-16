"use strict";

angular.module('amep-group').
controller('groupStatsController', ['$scope','Group', 'Cycle', 'currentGroup', 'currentCycles', function ($scope, Group, Cycle, currentGroup, currentCycles) {
  $scope.myLabel="stats";

  $scope.cycles = currentCycles;
  $scope.cycleSelected = $scope.cycles[0];
  $scope.getWeeks = Group.Cycle.Week.query({
    groupId: $scope.cycleSelected.group_id,
    cycleId: $scope.cycleSelected.id
  });
  $scope.prod=[];
  $scope.getProducts = function(){
    for (var i in $scope.getWeeks) {
      $scope.prod.push(i);
    }
    return $scope.prod;
  };
  $scope.testezinho=[
    {'nome': '2006', 'valor': 56},
    {'nome': '2007', 'valor': 70}
  ];
  $scope.a=[];
  $scope.b=[];
  for(var i in $scope.testezinho){
    $scope.a.push($scope.testezinho[i].nome);
    $scope.b.push(i.valor);
  }

  $scope.number=78;
}]).
controller("BarCtrl", function ($scope) {
  $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  $scope.series = ['venda'];

  $scope.data = [
    [56, 59, 80, 81, 56, 55, 40]
  ];
}).controller("LineCtrl", function ($scope) {

  $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.series = ['€', 'Ecos'];
  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
});
