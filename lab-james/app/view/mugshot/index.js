'use strict';

const angular = require('angular');

angular.module('imageApp')
  .controller('MugshotController', ['$rootScope', MugshotController]);

function MugshotController($rootScope) {
  let mc = this;
  mc.images = $rootScope.imageData;
}
