'use strict';

describe('Guitar', function() {
  var $httpBackend;
  var Guitar;
  var guitarsData = [
    {name: 'Guitar X'},
    {name: 'Guitar Y'},
    {name: 'Guitar Z'}
  ];

  // Add a custom equality tester before each test
  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  // Load the module that contains the `Guitar` service before each test
  beforeEach(module('core.guitar'));

  // Instantiate the service and "train" `$httpBackend` before each test
  beforeEach(inject(function(_$httpBackend_, _Guitar_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('guitars/guitars.json').respond(guitarsData);

    Guitar = _Guitar_;
  }));

  // Verify that there are no outstanding expectations or requests after each test
  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch the guitars data from `/guitars/guitars.json`', function() {
    var guitars = Guitar.query();

    expect(guitars).toEqual([]);

    $httpBackend.flush();
    expect(guitars).toEqual(guitarsData);
  });

});
