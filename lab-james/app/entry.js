'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
const angular_route = require('angular-route');

const imageApp = angular.module('imageApp', [angular_route]);

imageApp.run(['$rootScope', function($rootScope) {
  $rootScope.imageData = require('./data/images.js');
}]);

imageApp.config(['$routeProvider', function($route) {
  $route
    .when('/', {
      templateUrl: '/app/view/home/home.html',
      controller: 'HomeController',
      controllerAs: 'hc'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);

require('./view/home');
