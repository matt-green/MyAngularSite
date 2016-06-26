'use strict';

describe('guitarList', function() {

  // Load the module that contains the `guitarList` component before each test
  beforeEach(module('guitarList'));

  // Test the controller
  describe('GuitarListController', function() {
    var $httpBackend, ctrl;

    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('guitars/guitars.json')
                  .respond([{name: 'Fender'}, {name: 'Gibson'}]); //change to real names to pass

      ctrl = $componentController('guitarList');
    }));

    it('should create a `guitars` property with 2 guitars fetched with `$http`', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.guitars).toEqual([]);

      $httpBackend.flush();
      expect(ctrl.guitars).toEqual([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
    });

    it('should set a default value for the `orderProp` property', function() {
      expect(ctrl.orderProp).toBe('age');
    });

  });

});
