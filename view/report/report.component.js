'use strict';

angular.
  module('view.report').
  component('report', {
    templateUrl: 'view/report/report.template.html',
    controller: ['$routeParams', '$scope', 'NotifyingService', 'Report',
      function reportController($routeParams, $scope, NotifyingService, Report) {
        const { qDocId, qId, user, userDirectory } = $routeParams;

        const getLayout = () => {
          Report.get({
            command: 'layout',
            app: qDocId,
            sheet: qId,
            user,
            userDirectory,
          }).$promise
            .then((result) => {
              this.layout = result;
            })
            .catch((error) => {
              console.log('%c*** error ***', 'background: #FF0000; color: #FFFFFF; font-weight: bold;');
              console.log(error);
            });
        }

        const getSheet = (field = []) => {
          Report.get({
            command: 'sheet',
            app: qDocId,
            sheet: qId,
            user,
            userDirectory,
            field: JSON.stringify(field),
          }).$promise
            .then((result) => {
              console.log(result.result);
              this.qObject = result;
              this.layout = result.result.qLayout;
              this.layout.height = 100;
              this.cells = [
                // {
                //   qLayout: result.result.qLayout,
                //   bounds: {
                //     x: 2,
                //     y: 2
                //   },
                //   type: 'linechart',
                //   dataPages: result.result.qLayout.qHyperCube.qDataPages
                // },
                {
                  qLayout: result.result.qLayout,
                  bounds: {
                    x: 2,
                    y: 2
                  },
                  type: 'barchart',
                  dataPages: result.result.qLayout.qHyperCube.qDataPages
                }
              ];
            })
            .catch((error) => {
              console.log('%c*** error ***', 'background: #FF0000; color: #FFFFFF; font-weight: bold;');
              console.log(error);
            });
        }

        const getVisualization = (field = []) => {
          Report.get({
            command: 'visualization',
            app: qDocId,
            sheet: qId,
            user,
            userDirectory,
            field: JSON.stringify(field),
          }).$promise
            .then((result) => {
              this.layout.cells.forEach((cell) => {
                cell.dataPages = result.cells.find((item) => item.name == cell.name).dataPages;
                if (cell.type == 'filterpane') {
                  cell.listbox = result.cells.find((item) => item.name == cell.name).listbox;
                }
              });
            })
            .catch((error) => {
              console.log('%c*** error ***', 'background: #FF0000; color: #FFFFFF; font-weight: bold;');
              console.log(error);
            });
        }

        this.$onInit = async () => {
          await getSheet();
        }

        NotifyingService.subscribe($scope, async function somethingChanged(event, message) {
          console.log('%c*** reportController ***', 'background: #0000FF; color: #FFFFFF; font-weight: bold;');
          console.log(event);
          console.log(message);
          await getVisualization([
              {
                qFieldName: 'Заказчик',
                qFieldValues: [
                  {
                    qText: 'НМЖК',
                    qIsNumeric: false,
                    qNumber: 0
                  },
                ],
                qToggleMode: false,
                qSoftLock: false
              },
            ]);
        });
      }
    ]
  });
