'use strict';

angular.
  module('visualizationApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/report', {
          template: '<report></report>'
        }).
        otherwise('/report');
    }
  ]);
///sdsfsdfd
