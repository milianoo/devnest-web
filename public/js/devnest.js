'use strict';

angular.module('devnestApp',['devnestApp.controllers','ngRoute','ngAnimate']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/home'
      }).
      when('/home', {
        templateUrl: 'partials/home'
      }).
      when('/meetups', {
        templateUrl: 'partials/meetups'
      }).
      when('/people', {
        templateUrl: 'partials/people'
      }).
      otherwise({
        templateUrl: 'partials/error'
      });
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }]);