'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
const angular_route = require('angular-route');

const rootData = require('./data/root_data.js');
const routes = require('./routes/route.js');

angular.module('imageApp', [angular_route]);
angular.module('imageApp').run(['$rootScope', rootData]);
angular.module('imageApp').config(routes);

require('./view/home');
require('./view/mugshot');
require('./view/fullsize');
require('./view/error');
