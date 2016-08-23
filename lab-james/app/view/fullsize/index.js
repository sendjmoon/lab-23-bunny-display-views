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

  let isValidId = require('./valid_id_check.js');
  if (!isValidId(id, fsc)) $location.path('/error');
  
  fsc.image = fsc.images[id - 1];
}
