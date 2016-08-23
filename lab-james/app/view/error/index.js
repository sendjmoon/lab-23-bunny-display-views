'use strict';

const angular = require('angular');
const imageApp = angular.module('imageApp');

imageApp.controller('ErrorController', ['$rootScope', ErrorController]);

function ErrorController($rootScope) {
  this.errorMessage = $rootScope.errorMessage;
}
