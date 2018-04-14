'use strict';

/**
 * @ngdoc function
 * @name webInterfaceApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the webInterfaceApp
 */
angular.module('webInterfaceApp')
  .controller('AboutCtrl', function ($scope, $sce, $rootScope) {
    var componentToBeRendered = '';
    angular.forEach($rootScope.data, function (component) {
      componentToBeRendered += '<div class="component-container">' + component.directive + '</div>';
    });
    $scope.html = $sce.trustAsHtml(componentToBeRendered);
  });
