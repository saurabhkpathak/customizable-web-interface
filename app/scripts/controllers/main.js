'use strict';

/**
 * @ngdoc function
 * @name webInterfaceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webInterfaceApp
 */
angular.module('webInterfaceApp')
  .controller('MainCtrl', function ($scope, $location, $rootScope) {
    $scope.lists = [{
        label: 'UX Components Available',
        allowedTypes: ['component'],
        max: 4,
        components: [{
            name: 'Carousel',
            type: 'component',
            directive: '<wi-carousel></wi-carousel>'
          },
          {
            name: 'Collapse',
            type: 'component',
            directive: '<wi-collapse></wi-collapse>'
          }
        ]
      },
      {
        label: 'UX Components to be used',
        allowedTypes: ['component'],
        max: 10,
        components: []
      }
    ];
    $scope.createPage = function () {
      $rootScope.data = $scope.lists[1].components;
      $location.path('/about');
    };
  });
