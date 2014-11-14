'use strict';

angular.module('csvExplorerClientApp')
  .controller('TablesCtrl', function ($scope) {
  	$scope.tableName = "table_name.csv";
    $scope.myData = [{name: "Moroni", age: 50},
                     {name: "Tiancum", age: 43},
                     {name: "Jacob", age: 27},
                     {name: "Nephi", age: 29},
                     {name: "Enos", age: 34}];
    $scope.gridOptions = { data: 'myData' };
  });
