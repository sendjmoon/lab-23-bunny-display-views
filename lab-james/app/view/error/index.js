'use strict';

const angular = require('angular');

angular.module('imageApp')
  .controller('ErrorController', ['$rootScope', ErrorController]);

function ErrorController($rootScope) {
  let ec = this;
  ec.errorMessage = $rootScope.errorMessage;
}
