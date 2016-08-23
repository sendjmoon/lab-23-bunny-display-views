'use strict';

module.exports = function($rootScope) {
  $rootScope.imageData = require('./images.js');
  $rootScope.errorMessage = 'Error: Something went wrong.';
};
