'use strict';

// Register `guitarDetail` component, along with its associated controller and template
angular.
  module('guitarDetail').
  component('guitarDetail', {
    templateUrl: 'guitar-detail/guitar-detail.template.html',
    controller: ['$routeParams', 'Guitar',
      function GuitarDetailController($routeParams, Guitar) {
        var self = this;
        self.guitar = Guitar.get({guitarId: $routeParams.guitarId}, function(guitar) {
          self.setImage(guitar.images[0]);
        });

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };
      }
    ]
  });
