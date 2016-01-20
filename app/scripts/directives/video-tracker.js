'use strict';

/**
 * @ngdoc function
 * @name vivieApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vivieApp
 */
angular.module('vivieApp')
    .directive('videoTracker', function () {
        return {
            link: function($scope, $element) {

                $scope.onUpdateTime = function(event) {
                    console.log('onUpdateTime event', event.target.currentTime);
                };

                $element[0].addEventListener("timeupdate", $scope.onUpdateTime.bind(this), false);
            }
        };

    });
