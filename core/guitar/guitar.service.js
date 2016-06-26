'use strict';

angular.
  module('core.guitar').
  factory('Guitar', ['$resource',
    function($resource) {
      return $resource('guitars/:guitarId.json', {}, {
        query: {
          method: 'GET',
          params: {guitarId: 'guitars'},
          isArray: true
        }
      });
    }
  ]);
