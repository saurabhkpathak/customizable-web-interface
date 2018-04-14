'use strict';

/**
 * @ngdoc directive
 * @name webInterfaceApp.directive:wiCollapse
 * @description
 * # wiCollapse
 */
angular.module('webInterfaceApp')
  .directive('wiCollapse', function () {
    return {
      templateUrl: '../../views/wi-collapse.html',
      restrict: 'E',
      scope: true,
      controller: function ($scope) {
        $scope.isCollapsed = true;
      }
    };
  });
