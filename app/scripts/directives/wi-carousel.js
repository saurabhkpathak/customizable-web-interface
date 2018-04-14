'use strict';

/**
 * @ngdoc directive
 * @name webInterfaceApp.directive:wiCarousel
 * @description
 * # wiCarousel
 */
angular.module('webInterfaceApp')
  .directive('wiCarousel', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element) {
        element.text('this is the wiCarousel directive');
      }
    };
  });
