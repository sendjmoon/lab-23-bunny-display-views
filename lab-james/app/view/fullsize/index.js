'use strict';

const angular = require('angular');

angular.module('imageApp')
  .controller('FullsizeController', [
    '$rootScope',
    '$routeParams',
    '$location',
    FullsizeController
  ]);

function FullsizeController($rootScope, $routeParams, $location) {
  let fsc = this;
  fsc.images = $rootScope.imageData;
  let id = $routeParams.id;

  fsc.validId = function(id) {
    if (isNaN(id)) return false;
    if (!isFinite(id)) return false;
    if (id < 1) return false;
    if (typeof(fsc.images[id - 1]) === 'undefined') return false;
    return true;
  };

  if(!fsc.validId(id)) $location.path('/error');

  fsc.image = fsc.images[id - 1];
}
