'use strict';

const angular = require('angular');
const imageApp = angular.module('imageApp');

imageApp.controller('MugshotController', ['$rootScope', MugshotController]);

function MugshotController($rootScope) {
  this.images = $rootScope.imageData;
}
