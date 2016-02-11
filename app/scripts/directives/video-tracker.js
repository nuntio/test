'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
angular.module('testApp')
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
