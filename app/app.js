'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  '720kb.datepicker',
  'myApp.checkout'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/checkout'});
}]);
