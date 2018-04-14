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
      templateUrl: '../../views/wi-carousel.html',
      restrict: 'E',
      scope: true,
      controller: function ($scope) {
        $scope.myInterval = 5000;
        $scope.noWrapSlides = false;
        $scope.active = 0;
        var slides = $scope.slides = [];
        var currIndex = 0;

        $scope.addSlide = function () {
          var newWidth = 600 + slides.length + 1;
          slides.push({
            image: '//unsplash.it/' + newWidth + '/300',
            text: ['Nice image', 'Awesome photograph', 'That is so cool', 'I love that'][slides.length % 4],
            id: currIndex++
          });
        };

        for (var i = 0; i < 4; i++) {
          $scope.addSlide();
        }
      }
    };
  });
