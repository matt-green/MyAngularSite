'use strict';

// Register `guitarList` component, along with its associated controller and template
angular.
  module('guitarList').
  component('guitarList', {
    templateUrl: 'guitar-list/guitar-list.template.html',
    controller: ['Guitar',
      function GuitarListController(Guitar) {
        this.guitars = Guitar.query();
        this.orderProp = 'age';
      }
    ]
  });
