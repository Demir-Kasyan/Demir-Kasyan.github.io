'use strict';

angular.
  module('service.visualization').
  factory('Visualization', ['$resource', 'Constant',
    function($resource, Constant) {
      const url = `${Constant.api}/qlik/visualization/:command`;

      return $resource(url, {});
    }
  ]);
