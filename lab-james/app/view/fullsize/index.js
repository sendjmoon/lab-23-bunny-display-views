'use strict';

const angular = require('angular');
const imageApp = angular.module('imageApp');

imageApp.controller('FullsizeController', [
  '$rootScope',
  '$routeParams',
  '$location',
  FullsizeController
]);

function FullsizeController($rootScope, $routeParams, $location) {
  this.images = $rootScope.imageData;
  let id = $routeParams.id;

  this.validId = function(id) {
    if (isNaN(id)) return false;
    if (!isFinite(id)) return false;
    if (id < 1) return false;
    if (typeof(this.images[id - 1]) === 'undefined') return false;
    return true;
  };

  if(!this.validId(id)) $location.path('/error');

  this.image = this.images[id - 1];
}
