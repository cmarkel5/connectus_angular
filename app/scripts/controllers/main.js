'use strict';

/**
 * @ngdoc function
 * @name connectusAngular2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the connectusAngular2App
 */
angular.module('connectusAngular2App')
  .controller('MainCtrl', function ($scope, uiGmapGoogleMapApi) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.map = {
      center: {
        latitude: 33.771112,
        longitude: -84.367090
      },
      zoom: 12
    };

    uiGmapGoogleMapApi.then(function(/* maps */) {
      // can manipulate the map here.
    });

  });
