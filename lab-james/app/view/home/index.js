'use strict';

const angular = require('angular');
const imageApp = angular.module('imageApp');

imageApp.controller('HomeController', ['$rootScope', HomeController]);

function HomeController($rootScope) {
  this.images = $rootScope.imageData;
}
