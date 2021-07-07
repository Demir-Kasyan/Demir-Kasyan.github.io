'use strict';

angular.
  module('visualizationApp').
  factory('NotifyingService', ['$rootScope',
    function NotifyingService($rootScope) {
      return {
        subscribe: function(scope, callback) {
          const handler = $rootScope.$on('notifying-service-event', callback);
          scope.$on('$destroy', handler);
        },
        publish: function(message) {
          console.log('%c*** NotifyingService ***', 'background: #0000EE; color: #FFFFFF; font-weight: bold;');
          console.log(message);
          $rootScope.$emit('notifying-service-event', message);
        }
      }
    }
  ]);
