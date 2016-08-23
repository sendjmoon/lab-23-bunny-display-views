'use strict';

const angular = require('angular');
const isValidId = require('./valid_id_check.js');

angular.module('imageApp')
  .controller('FullsizeController', [
    '$rootScope',
    '$routeParams',
    '$location',
    FullsizeController
  ]);

function FullsizeController($rootScope, $routeParams, $location) {
  let fsc = this;
  let id = $routeParams.id;
  fsc.images = $rootScope.imageData;

  if (!isValidId(id, fsc)) $location.path('/error');

  fsc.image = fsc.images[id - 1];
}
