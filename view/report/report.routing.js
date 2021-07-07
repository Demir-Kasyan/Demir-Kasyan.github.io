'use strict';

angular.
  module('view.report').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/report/:qDocId/:qId', {
          template: '<report></report>'
        });
    }
  ]);
