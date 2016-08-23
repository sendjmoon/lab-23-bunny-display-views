'use strict';

module.exports = function($routeProvider) {
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
};
