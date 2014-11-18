'use strict';

angular.module('csvExplorerClientApp')
  .controller('TablesCtrl', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {
  	var tableUrl = "http://127.0.0.1:5000/api/v1/tables/" + $routeParams.tableID;
  	console.log("tableUrl: " + tableUrl);
  	$http.get(tableUrl).
  	success(function(data, status, headers, config) {
  		console.log(data);
    // this callback will be called asynchronously
    // when the response is available
	}).
  	error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
	});

  	$scope.tableName = "table_name.csv";
    $scope.myData = [{name: "A", age: 50},
                     {name: "B", age: 43},
                     {name: "C", age: 27},
                     {name: "D", age: 29},
                     {name: "E", age: 34}];
    $scope.gridOptions = { data: 'myData' };
  }]);
