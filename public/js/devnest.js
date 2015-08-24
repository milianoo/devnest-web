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
      when('/contact', {
        templateUrl: '/partials/contact',
        controller: 'ContactCtrl'
      }).
      when('/people', {
        templateUrl: 'partials/people'
      }).
      when('/meetups', {
        templateUrl: 'meetup/meetups'
      }).
      when('/register', {
        templateUrl: 'meetup/register',
        controller: 'RegisterCtrl'
      }).
      when('/list', {
        templateUrl: 'meetup/attendees',
        controller: 'RegisterCtrl'
      }).
      when('/contacts', {
        templateUrl: 'meetup/attendees',
        controller: 'RegisterCtrl'
      }).
      when('/thankyou', {
        templateUrl: 'meetup/thankyou'
      }).
      when('/nintex', {
        templateUrl: '/company/nintex',
      }).
      when('/exact', {
        templateUrl: '/company/exact',
      }).
      otherwise({
        templateUrl: 'partials/error'
      });
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }]);