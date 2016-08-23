'use strict';

const angular = require('angular');

angular.module('imageApp')
  .controller('HomeController', ['$rootScope', HomeController]);

function HomeController($rootScope) {
  let hc = this;
  hc.images = $rootScope.imageData;
}
