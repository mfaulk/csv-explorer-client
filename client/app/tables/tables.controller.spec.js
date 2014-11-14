'use strict';

describe('Controller: TablesCtrl', function () {

  // load the controller's module
  beforeEach(module('csvExplorerClientApp'));

  var TablesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TablesCtrl = $controller('TablesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
