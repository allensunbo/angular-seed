'use strict';

/**
 * @ngdoc overview
 * @name proteusApp
 * @description
 * # proteusApp
 *
 * Main module of the application.
 */
(function () {
  var app = angular.module('proteusApp', [
      'ngAnimate',
      'ngAria',
      'ngCookies',
      'ngMessages',
      'ngResource',
      'ngRoute',
      'ngSanitize'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
        })
        .when('/contact', {
          templateUrl: 'views/contact.html',
          controller: 'ContactCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    });


  app.controller('ContactCtrl', require('./controllers/contact'));

  require('./controllers/main');
  require('./controllers/about');

})();
