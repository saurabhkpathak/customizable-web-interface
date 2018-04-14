'use strict';

/**
 * @ngdoc directive
 * @name webInterfaceApp.directive:wiAccordion
 * @description
 * # wiAccordion
 */
angular.module('webInterfaceApp')
  .directive('wiAccordion', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      scope: true
    };
  });
