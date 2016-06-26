'use strict';

angular.
  module('myGuitarApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/guitars', {
          template: '<guitar-list></guitar-list>'
        }).
        when('/guitars/:guitarId', {
          template: '<guitar-detail></guitar-detail>'
        }).
        otherwise('/guitars');
    }
  ]);
