'use strict';

describe('Directive: wiCollapse', function () {

  // load the directive's module
  beforeEach(module('webInterfaceApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<wi-collapse></wi-collapse>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the wiCollapse directive');
  }));
});
