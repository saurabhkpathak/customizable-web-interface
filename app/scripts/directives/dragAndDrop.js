'use strict';

/**
 * @ngdoc directive
 * @name webInterfaceApp.directive:dragAndDrop
 * @description
 * # dragAndDrop
 */
angular.module('webInterfaceApp')
  .directive('dragAndDrop', function () {
    return {
      templateUrl: '../../views/dragAndDrop.html',
      restrict: 'E',
      scope: {
        list: '='
      },
      controller: function ($scope) {
        $scope.lists = $scope.list;

        $scope.copyComponent = function () {};

        // Model to JSON for demo purpose
        $scope.$watch('lists', function (lists) {
          $scope.modelAsJson = angular.toJson(lists, true);
        }, true);
      }
    };
  });
