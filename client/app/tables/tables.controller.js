'use strict';

angular.module('csvExplorerClientApp')
  .controller('TablesCtrl', function ($scope) {
  	$scope.tableName = "table_name.csv";
    $scope.myData = [{name: "A", age: 50},
                     {name: "B", age: 43},
                     {name: "C", age: 27},
                     {name: "D", age: 29},
                     {name: "E", age: 34}];
    $scope.gridOptions = { data: 'myData' };
  });
