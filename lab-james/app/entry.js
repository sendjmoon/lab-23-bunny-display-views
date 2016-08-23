'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
const angular_route = require('angular-route');

angular.module('imageApp', [angular_route]);

angular.module('imageApp')
  .run(['$rootScope', function($rootScope) {
    $rootScope.imageData = require('./data/images.js');
    $rootScope.errorMessage = 'Error: Something went wrong.';
  }]);

angular.module('imageApp')
  .config(config);

function config($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '/app/view/home/home.html',
    controller: 'HomeController',
    controllerAs: 'hc'
  })
  .when('/mugshot', {
    templateUrl: '/app/view/mugshot/mugshot.html',
    controller: 'MugshotController',
    controllerAs: 'mc'
  })
  .when('/fullsize/:id', {
    templateUrl: '/app/view/fullsize/fullsize.html',
    controller: 'FullsizeController',
    controllerAs: 'fsc'
  })
  .when('/error', {
    templateUrl: '/app/view/error/error.html',
    controller: 'ErrorController',
    controllerAs: 'ec'
  })
  .otherwise({
    redirectTo: '/error'
  });
}

require('./view/home');
require('./view/mugshot');
require('./view/fullsize');
require('./view/error');
