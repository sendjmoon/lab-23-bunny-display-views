'use strict';
/*global angular angular:true*/

describe('test routing for view controllers', function() {
  beforeEach(() => {
    angular.mock.module('imageApp');
    angular.mock.inject(($controller) => {
      this.hc = new $controller('HomeController');
      this.fsc = new $controller('FullsizeController');
      this.mc = new $controller('MugshotController');
      this.ec = new $controller('ErrorController');
    });
  });

  it('home should display a list of villains', () => {
    expect(this.hc.images.length).toEqual(4);
  });

  it('fullsize should display a fullsize image of the villain', () => {
    expect(this.fsc.id).toEqual(undefined);
    expect(this.fsc.images.length).toEqual(4);
  });

  it('mugshot should display the thumbnail image of each villain', () => {
    expect(this.mc.images.length).toEqual(4);
  });

  it('error should render an error to the page', () => {
    expect(this.ec.errorMessage).toEqual('Error: Something went wrong.');
  });
});
