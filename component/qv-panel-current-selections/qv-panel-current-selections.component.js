'use strict';

angular.
  module('component.qv-panel-current-selections').
  component('cQvPanelCurrentSelections', {
    templateUrl: 'component/qv-panel-current-selections/qv-panel-current-selections.template.html',
    bindings: {
      app: '<',
      fields: '<',
    },
    controller: ['$rootScope', 'Report',
      function qvPanelCurrentSelectionsController($rootScope, Report) {
        this.$onChanges = (changes) => {
          this.filterClear = $rootScope.filterClear;
        }
      }
    ]
  });
