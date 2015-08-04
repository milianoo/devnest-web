'use strict';

angular.module('devnestApp',['devnestApp.controllers','ngRoute']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/home'
      }).
      when('/home', {
        templateUrl: 'partials/home'
      }).
      when('/meetup', {
        templateUrl: 'partials/meetup'
      }).
      when('/people', {
        templateUrl: 'partials/people'
      }).
      otherwise({
        templateUrl: 'partials/error'
      });
    $locationProvider.html5Mode(true);
  }]);