'use strict';

/**
 * @ngdoc overview
 * @name connectusAngular2App
 * @description
 * # connectusAngular2App
 *
 * Main module of the application.
 */
angular
  .module('connectusAngular2App', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngRoute',
    'ngSanitize',
    'uiGmapgoogle-maps'
  ])
  .config(['$routeProvider', 'GoogleMapApiProvider'.ns(), function ($routeProvider, GoogleMapApi) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    
      GoogleMapApi.configure({
          key: 'AIzaSyCJh6kHPa5K2u_7u3WZR4Df883_08BOfLc',
          v: '3.17',
          libraries: 'weather,geometry,visualization'
      });
    
  }]);
