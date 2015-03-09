'use strict';

/**
 * @ngdoc function
 * @name proteusApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the proteusApp
 */
angular.module('proteusApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
