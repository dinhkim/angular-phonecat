'use strict';

require('angular');
require('angular-animate');
require('angular-route');

// Define the `phonecatApp` module
angular.module('phonecatApp', [
  'ngAnimate',
  'ngRoute',
  'core',
  'phoneDetail',
  'phoneList'
]);

require('./app.config')
require('./app.animations')
