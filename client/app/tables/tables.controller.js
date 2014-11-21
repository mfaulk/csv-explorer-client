'use strict';

angular.module('csvExplorerClientApp')
  .controller('TablesCtrl', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {

    /**
    * @param {rows} rows is an array of row objects, each containing an array of cells
    * @return {headers} an array of strings
    */
    function defaultHeaders(rows) {
      var maxRowLength = 0;
      for(var i=0; i<rows.length; i++) {
        var r = rows[i];
        maxRowLength = Math.max(maxRowLength, r.cells.length);
      } 
      var headers = [];
      for(var i=0; i<maxRowLength; i++) {
        headers.push("Column " + i.toString());
      } 
      return headers;
    }

    /**
    * Converts JSON from REST API to ng-grid format, e.g.
    *  [{name: "A", age: 50},
    *   {name: "B", age: 43},
    *   {name: "C", age: 27},
    *   {name: "D", age: 29},
    *   {name: "E", age: 34}];
    *
    * @param {table} 
    * @param {headers} an array of column header strings.
    * @returns {newTable} An array of objects representing rows.
    */
    function formatTable(table, headers) {
      var newTable = [];
      for(var rowIndex = 0; rowIndex < table.rows.length; rowIndex++) {
        var row = table.rows[rowIndex];
        var newRow = {};
        for(var cellIndex = 0; cellIndex < row.cells.length; cellIndex++) {
          var cell = row.cells[cellIndex];
          var contents = cell.cell_contents;
          newRow[headers[cellIndex]]=contents;
        }
        newTable.push(newRow);
      } 
      return newTable;
    }


  	var tableUrl = "http://127.0.0.1:5000/api/v1/table/" + $routeParams.tableID;
  	console.log("tableUrl: " + tableUrl);
  	$http.get(tableUrl).
  	success(function(data, status, headers, config) {
  		console.log(data);
      var headers = defaultHeaders(data.rows);
      $scope.myData = formatTable(data,headers);
  		$scope.tableName = data.file_name;
    // this callback will be called asynchronously
    // when the response is available
	}).
  	error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
	});
    $scope.gridOptions = { data: 'myData' };
  }]);
