'use strict';

angular.module('csvExplorerClientApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/tables', {
        templateUrl: 'app/tables/tables.html',
        controller: 'TablesCtrl'
      })
      .when('/tables/:tableID', {
      	templateUrl: 'app/tables/tables.html',
      	controller: 'TablesCtrl'
      });
  });
