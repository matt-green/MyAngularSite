'use strict';

describe('guitarDetail', function() {

  // Load the module that contains the `guitarDetail` component before each test
  beforeEach(module('guitarDetail'));

  // Test the controller
  describe('GuitarDetailController', function() {
    var $httpBackend, ctrl;
    var xyzGuitarData = {
      name: 'guitar xyz',
      images: ['image/url1.png', 'image/url2.png']
    };

    beforeEach(inject(function($componentController, _$httpBackend_, $routeParams) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('guitars/xyz.json').respond(xyzGuitarData);

      $routeParams.guitarId = 'xyz';

      ctrl = $componentController('guitarDetail');
    }));

    it('should fetch the guitar details', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.guitar).toEqual({});

      $httpBackend.flush();
      expect(ctrl.guitar).toEqual(xyzGuitarData);
    });

  });

});
