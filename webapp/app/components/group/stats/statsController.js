"use strict";

angular.module('amep-group').
controller('groupStatsController', ['$scope','Group', 'Cycle', 'currentGroup','currentStats', function ($scope, Group, Cycle, currentGroup, currentStats) {
  $scope.myLabel="stats";


  $scope.stats = currentStats;

  $scope.venda=[];
  $scope.compra=[];
  $scope.myEcos=[];
  $scope.myEuros=[];
  $scope.label1=[];

  for(var i=0; i<$scope.stats.length; i++){
    $scope.venda.push($scope.stats[i].sumstocks);
    $scope.compra.push($scope.stats[i].sumorders);
    $scope.myEcos.push($scope.stats[i].sumecos);
    $scope.myEuros.push($scope.stats[i].sumeuros);
    var myDate= new Date($scope.stats[i].start_time);
    $scope.label1.push((myDate.getDate()) + "-" + (myDate.getMonth()+1) + "-" + myDate.getFullYear());
  }
}]).
controller("BarCtrl", function ($scope) {
  $scope.series = ['venda','compra'];

  $scope.data=[$scope.venda, $scope.compra];
}).controller("LineCtrl", function ($scope) {
  $scope.series = ['€', 'Ecos'];
  $scope.data2 = [$scope.myEuros, $scope.myEcos];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
});
