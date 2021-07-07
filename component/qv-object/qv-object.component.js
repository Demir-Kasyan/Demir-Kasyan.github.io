'use strict';

var filter = {};

angular.
  module('component.qv-object').
  component('cQvObject', {
    templateUrl: 'component/qv-object/qv-object.template.html',
    bindings: {
      app: '<',
      cell: '<',
    },
    controller: ['$rootScope', '$element', 'Report',
      function qvObjectController($rootScope, $element, Report) {
        $rootScope.filter = filter;

        this.$onChanges = (changes) => {
          if(changes.cell) {
            const element = document.createElement('div');
            element.innerHTML = `<p>${this.cell.name}</p>`;
            element.style.cssText = `padding: 5px; position: absolute; left: ${this.cell.bounds.x}%; top: ${this.cell.bounds.y}%; height: ${this.cell.bounds.height}vh; width: ${this.cell.bounds.width}%;`;
            element.dataset.qId = this.cell.name;
            $element[0].appendChild(element);

            Report.get({
              command: 'visualization',
              qDocId: this.app,
              qId: this.cell.name,
            }).$promise
              .then((result) => {

                console.log(result.type);

                switch (result.type) {
                  case 'barchart':
                    barchart(element, result, this.handlerClick);
                    element.dataset.visualization = 'barchart';
                    break;
                  case 'barchart-stacked':
                    barchartStacked(element, result, this.handlerClick);
                    element.dataset.visualization = 'barchart-stacked';
                    break;
                  case 'combochart':
                    combochart(element, result, this.handlerClick);
                    element.dataset.visualization = 'combochart';
                    break;
                  case 'linechart':
                    linechart(element, result, this.handlerClick);
                    element.dataset.visualization = 'linechart';
                    break;
                  case 'piechart':
                    piechart(element, result, this.handlerClick);
                    element.dataset.visualization = 'piechart';
                    break;
                  case 'scatterplot':
                    scatterplot(element, result, this.handlerClick);
                    element.dataset.visualization = 'scatterplot';
                    break;
                  case 'filterpane':
                    const {qListLayout, listObjectData} = result;
                    this.qFieldName = qListLayout.qListObject.qDimensionInfo.qFallbackTitle;
                    filter[qListLayout.qListObject.qDimensionInfo.qFallbackTitle] = {
                      qFieldName: qListLayout.qListObject.qDimensionInfo.qFallbackTitle,
                      qText: [],
                    };
                    let innerHTML = `<div class="qv-filterpane">
                      <div class="qv-filterpane-column" role="presentation">
                        <div class="qv-filterpane-collapsed popover-trigger" tabindex="-1" role="listitem">
                          <div class="qv-collapsed-listbox interactive" interactive="interactive" dir="ltr" style="background-color: transparent;">
                            <div class="title-wrapper" ng-style="listStyle" style="color: rgb(89, 89, 89); font-size: 13px;">
                              <span class="title" title="${qListLayout.qListObject.qDimensionInfo.qFallbackTitle}">${qListLayout.qListObject.qDimensionInfo.qFallbackTitle}</span>
                            </div>
                            <div class="qv-state-count-bar">
                              <div class="state selected" style="width: 0%;"></div>
                              <div class="state locked" style="width: 0%;"></div>
                              <div class="state optional" style="width: 100%;"></div>
                              <div class="state alternative" style="width: 0%;"></div>
                            </div>
                          </div>
                        </div>
                        <div class="popover-content" style="display: none;">
                          <div class="lui-popover" style="margin-top: 90px; width: 234px; min-width: 234px;">
                            <div class="lui-popover__header" style="background: none; border: none;">
                              <div class="toolbar-wrapper">
                                <div class="qv-selection-toolbar qvt-selection-toolbar sel-toolbar-popover">
                                  <div class="sel-toolbar-list-wrapper">
                                    <table class="sel-toolbar-list">
                                      <tbody>
                                        <tr>
                                          <td class="sel-toolbar-list-item">
                                            <button class="sel-toolbar-btn sel-toolbar-icon sel-toolbar-icon-toggle" style="cursor: pointer;">
                                              <span class="lui-icon lui-icon--more"></span>
                                            </button>
                                          </td>
                                          <td class="sel-toolbar-list-item">
                                            <button class="sel-toolbar-btn clear sel-toolbar-icon" style="cursor: pointer;">
                                              <span class="sel-toolbar-span-icon lui-icon lui-icon--clear-selections"></span>
                                            </button>
                                          </td>
                                          <td class="sel-toolbar-list-item sel-toolbar-separator">
                                            <button class="sel-toolbar-btn sel-toolbar-icon-separator" disabled="disabled">
                                              <span class="sel-toolbar-span-icon lui-icon"></span>
                                            </button>
                                          </td>
                                          <td class="sel-toolbar-list-item">
                                            <button class="sel-toolbar-btn sel-toolbar-cancel" style="cursor: pointer;">
                                              <span class="sel-toolbar-span-icon lui-icon lui-icon--close"></span>
                                            </button>
                                          </td>
                                          <td class="sel-toolbar-list-item">
                                            <button class="sel-toolbar-btn sel-toolbar-confirm" style="cursor: pointer;">
                                              <span class="sel-toolbar-span-icon lui-icon lui-icon--tick"></span>
                                            </button>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="lui-popover__body lui-nopad" style="height: 332px;">
                              <ul class="lui-list" style="height: 100%; overflow-x: hidden; overflow-y: scroll;">
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>`;
                    element.innerHTML = innerHTML;

                    const listboxContainer = element.querySelector('.lui-list');
                    const listboxContent = listObjectData[0].qMatrix;

                    listboxContent.forEach((item) => {
                      listboxContainer.innerHTML += `<li class="lui-list__item lui-list__action" style="cursor: pointer; font-size: 12px;" data-listitem="${item[0].qText}">
                        <span class="lui-list__text">${item[0].qText}</span>
                      </li>`;
                    });

                    const popoverTriggers = element.querySelector('.popover-trigger');
                    popoverTriggers.addEventListener('click', () => {
                      const popover = leonardoui.popover({
                        content: popoverTriggers.nextElementSibling.innerHTML,
                        closeOnEscape: true,
                        dock: 'bottom',
                        alignTo: popoverTriggers,
                      });

                      const listboxItems = popover.element.querySelectorAll('.lui-list__action');
                      this.listboxItems = listboxItems;
                      const visualizations = document.querySelectorAll('[data-visualization]');

                      const cancelButton = popover.element.querySelector('.sel-toolbar-cancel');
                      cancelButton.addEventListener('click', () => {
                        filter[qListLayout.qListObject.qDimensionInfo.qFallbackTitle] = {
                          qFieldName: qListLayout.qListObject.qDimensionInfo.qFallbackTitle,
                          qText: [],
                        };
                        listboxItems.forEach((item) => {
                          item.classList.remove('select');
                        });
                        visualizations.forEach((visualization) => {
                          Report.get({
                            command: 'fieldclear',
                            qDocId: this.app,
                            qId: visualization.dataset.qId,
                            qFieldName: qListLayout.qListObject.qDimensionInfo.qFallbackTitle,
                          }).$promise
                            .then((result) => {
                              switch (result.type) {
                                case 'barchart':
                                  barchart(visualization, result);
                                  break;
                                case 'barchart-stacked':
                                  barchartStacked(visualization, result);
                                  break;
                                case 'combochart':
                                  combochart(visualization, result);
                                  break;
                                case 'linechart':
                                  linechart(visualization, result);
                                  break;
                                case 'piechart':
                                  piechart(visualization, result);
                                  break;
                                case 'scatterplot':
                                  scatterplot(visualization, result);
                                  break;
                                case 'table':
                                  visualization.style.cssText += `overflow-x: hidden; overflow-y: auto;`;
                                  visualization.dataset.visualization = 'table';
                                  visualization.innerHTML = `<h1 class="qv-object-title qvt-visualization-title" title="${result.title}" style="font-size: 1.15385em; font-family: &quot;QlikView Sans&quot;; color: rgb(128, 128, 128);">${result.title}</h1>`;
                                  visualization.innerHTML += `<table id="${this.cell.name}" style="font-size: 13px; color: rgb(89, 89, 89); width: 100%"></table>`;

                                  let table = '';

                                  result.data.forEach((row, index) => {
                                    if (index == 0) {
                                      table += `<tr style="font-size: 13px; color: rgb(89, 89, 89);">`;
                                      row.forEach((cell) => {
                                        table += `<th class="qv-st-header-cell ui-draggable ui-draggable-handle ui-draggable-disabled qv-st-header-sortable qv-st-header-cell-dimension">
                                          <div class="qv-st-header-cell-wrapper">
                                            <div class="qv-st-value" style="text-align: left;">
                                              <div class="qv-st-value-overflow">
                                                <span>${cell}</span>
                                              </div>
                                            </div>
                                          </div>
                                        </th>`;
                                      });
                                      table += `<tr>`;
                                    } else {
                                      table += `<tr class="qv-st-data-row qv-grid-object-data-first-row">`;
                                      row.forEach((cell) => {
                                        table += `<td class="qv-st-data-cell qv-st-data-cell-dimension-value">
                                          <div class="qv-st-value" style="text-align: left;">
                                            <div class="qv-st-value-overflow">
                                              <span>${cell}</span>
                                            </div>
                                          </div>
                                        </td>`;
                                      });
                                      table += `<tr>`;
                                    }
                                  });

                                  setTimeout(() => {
                                    document.getElementById(this.cell.name).innerHTML = table;
                                  }, 1000);
                                  break;
                              }
                            });
                        });
                        popover.close();
                      });

                      const closeButton = popover.element.querySelector('.sel-toolbar-confirm');
                      closeButton.addEventListener('click', () => {
                        popover.close();
                      });

                      const selectAllButton = popover.element.querySelector('.sel-toolbar-icon-toggle');
                      selectAllButton.addEventListener('click', () => {
                        visualizations.forEach((visualization) => {
                          Report.get({
                            command: 'selectall',
                            qDocId: this.app,
                            qId: visualization.dataset.qId,
                            qFieldName: qListLayout.qListObject.qDimensionInfo.qFallbackTitle,
                          }).$promise
                            .then((result) => {
                              switch (result.type) {
                                case 'barchart':
                                  barchart(visualization, result);
                                  break;
                                case 'barchart-stacked':
                                  barchartStacked(visualization, result);
                                  break;
                                case 'combochart':
                                  combochart(visualization, result);
                                  break;
                                case 'linechart':
                                  linechart(visualization, result);
                                  break;
                                case 'piechart':
                                  piechart(visualization, result);
                                  break;
                                case 'scatterplot':
                                  scatterplot(visualization, result);
                                  break;
                                case 'table':
                                  visualization.style.cssText += `overflow-x: hidden; overflow-y: auto;`;
                                  visualization.dataset.visualization = 'table';
                                  visualization.innerHTML = `<h1 class="qv-object-title qvt-visualization-title" title="${result.title}" style="font-size: 1.15385em; font-family: &quot;QlikView Sans&quot;; color: rgb(128, 128, 128);">${result.title}</h1>`;
                                  visualization.innerHTML += `<table id="${this.cell.name}" style="font-size: 13px; color: rgb(89, 89, 89); width: 100%"></table>`;

                                  let table = '';

                                  result.data.forEach((row, index) => {
                                    if (index == 0) {
                                      table += `<tr style="font-size: 13px; color: rgb(89, 89, 89);">`;
                                      row.forEach((cell) => {
                                        table += `<th class="qv-st-header-cell ui-draggable ui-draggable-handle ui-draggable-disabled qv-st-header-sortable qv-st-header-cell-dimension">
                                          <div class="qv-st-header-cell-wrapper">
                                            <div class="qv-st-value" style="text-align: left;">
                                              <div class="qv-st-value-overflow">
                                                <span>${cell}</span>
                                              </div>
                                            </div>
                                          </div>
                                        </th>`;
                                      });
                                      table += `<tr>`;
                                    } else {
                                      table += `<tr class="qv-st-data-row qv-grid-object-data-first-row">`;
                                      row.forEach((cell) => {
                                        table += `<td class="qv-st-data-cell qv-st-data-cell-dimension-value">
                                          <div class="qv-st-value" style="text-align: left;">
                                            <div class="qv-st-value-overflow">
                                              <span>${cell}</span>
                                            </div>
                                          </div>
                                        </td>`;
                                      });
                                      table += `<tr>`;
                                    }
                                  });

                                  setTimeout(() => {
                                    document.getElementById(this.cell.name).innerHTML = table;
                                  }, 1000);
                                  break;
                              }
                            });
                        });

                        filter[qListLayout.qListObject.qDimensionInfo.qFallbackTitle] = {
                          qFieldName: qListLayout.qListObject.qDimensionInfo.qFallbackTitle,
                          qText: [],
                        };
                        listboxItems.forEach((item) => {
                          item.classList.add('select');
                        });
                      });

                      const clearButton = popover.element.querySelector('.clear');
                      clearButton.addEventListener('click', () => {
                        filter[qListLayout.qListObject.qDimensionInfo.qFallbackTitle] = {
                          qFieldName: qListLayout.qListObject.qDimensionInfo.qFallbackTitle,
                          qText: [],
                        };
                        listboxItems.forEach((item) => {
                          item.classList.remove('select');
                        });
                        visualizations.forEach((visualization) => {
                          Report.get({
                            command: 'fieldclear',
                            qDocId: this.app,
                            qId: visualization.dataset.qId,
                            qFieldName: qListLayout.qListObject.qDimensionInfo.qFallbackTitle,
                          }).$promise
                            .then((result) => {
                              switch (result.type) {
                                case 'barchart':
                                  barchart(visualization, result);
                                  break;
                                case 'barchart-stacked':
                                  barchartStacked(visualization, result);
                                  break;
                                case 'combochart':
                                  combochart(visualization, result);
                                  break;
                                case 'linechart':
                                  linechart(visualization, result);
                                  break;
                                case 'piechart':
                                  piechart(visualization, result);
                                  break;
                                case 'scatterplot':
                                  scatterplot(visualization, result);
                                  break;
                                case 'table':
                                  visualization.style.cssText += `overflow-x: hidden; overflow-y: auto;`;
                                  visualization.dataset.visualization = 'table';
                                  visualization.innerHTML = `<h1 class="qv-object-title qvt-visualization-title" title="${result.title}" style="font-size: 1.15385em; font-family: &quot;QlikView Sans&quot;; color: rgb(128, 128, 128);">${result.title}</h1>`;
                                  visualization.innerHTML += `<table id="${this.cell.name}" style="font-size: 13px; color: rgb(89, 89, 89); width: 100%"></table>`;

                                  let table = '';

                                  result.data.forEach((row, index) => {
                                    if (index == 0) {
                                      table += `<tr style="font-size: 13px; color: rgb(89, 89, 89);">`;
                                      row.forEach((cell) => {
                                        table += `<th class="qv-st-header-cell ui-draggable ui-draggable-handle ui-draggable-disabled qv-st-header-sortable qv-st-header-cell-dimension">
                                          <div class="qv-st-header-cell-wrapper">
                                            <div class="qv-st-value" style="text-align: left;">
                                              <div class="qv-st-value-overflow">
                                                <span>${cell}</span>
                                              </div>
                                            </div>
                                          </div>
                                        </th>`;
                                      });
                                      table += `<tr>`;
                                    } else {
                                      table += `<tr class="qv-st-data-row qv-grid-object-data-first-row">`;
                                      row.forEach((cell) => {
                                        table += `<td class="qv-st-data-cell qv-st-data-cell-dimension-value">
                                          <div class="qv-st-value" style="text-align: left;">
                                            <div class="qv-st-value-overflow">
                                              <span>${cell}</span>
                                            </div>
                                          </div>
                                        </td>`;
                                      });
                                      table += `<tr>`;
                                    }
                                  });

                                  setTimeout(() => {
                                    document.getElementById(this.cell.name).innerHTML = table;
                                  }, 1000);
                                  break;
                              }
                            });
                        });
                      });

                      listboxItems.forEach((item) => {
                        item.addEventListener('click', () => {

                          if (item.classList.contains('select')) {
                            item.classList.remove('select');
                            filter[qListLayout.qListObject.qDimensionInfo.qFallbackTitle].qText = filter[qListLayout.qListObject.qDimensionInfo.qFallbackTitle].qText.filter((fltr) => fltr.qText != item.dataset.listitem);
                          } else {
                            item.classList.add('select');
                            filter[qListLayout.qListObject.qDimensionInfo.qFallbackTitle].qText.push(
                              {
                                qText: item.dataset.listitem,
                              }
                            );
                            $rootScope.filterChanges();
                          }

                          visualizations.forEach((visualization) => {
                            Report.get({
                              command: 'fieldselectvalues',
                              qDocId: this.app,
                              qId: visualization.dataset.qId,
                              filter,
                            }).$promise
                              .then((result) => {
                                switch (result.type) {
                                  case 'barchart':
                                    barchart(visualization, result);
                                    break;
                                  case 'barchart-stacked':
                                    barchartStacked(visualization, result);
                                    break;
                                  case 'combochart':
                                    combochart(visualization, result);
                                    break;
                                  case 'linechart':
                                    linechart(visualization, result);
                                    break;
                                  case 'piechart':
                                    piechart(visualization, result);
                                    break;
                                  case 'scatterplot':
                                    scatterplot(visualization, result);
                                    break;
                                  case 'table':
                                    visualization.style.cssText += `overflow-x: hidden; overflow-y: auto;`;
                                    visualization.dataset.visualization = 'table';
                                    visualization.innerHTML = '';
                                    visualization.innerHTML = `<h1 class="qv-object-title qvt-visualization-title" title="${result.title}" style="font-size: 1.15385em; font-family: &quot;QlikView Sans&quot;; color: rgb(128, 128, 128);">${result.title}</h1>`;
                                    visualization.innerHTML += `<table id="${this.cell.name}" style="font-size: 13px; color: rgb(89, 89, 89); width: 100%"></table>`;

                                    let table = '';

                                    result.data.forEach((row, index) => {
                                      if (index == 0) {
                                        table += `<tr style="font-size: 13px; color: rgb(89, 89, 89);">`;
                                        row.forEach((cell) => {
                                          table += `<th class="qv-st-header-cell ui-draggable ui-draggable-handle ui-draggable-disabled qv-st-header-sortable qv-st-header-cell-dimension">
                                            <div class="qv-st-header-cell-wrapper">
                                              <div class="qv-st-value" style="text-align: left;">
                                                <div class="qv-st-value-overflow">
                                                  <span>${cell}</span>
                                                </div>
                                              </div>
                                            </div>
                                          </th>`;
                                        });
                                        table += `<tr>`;
                                      } else {
                                        table += `<tr class="qv-st-data-row qv-grid-object-data-first-row">`;
                                        row.forEach((cell) => {
                                          table += `<td class="qv-st-data-cell qv-st-data-cell-dimension-value">
                                            <div class="qv-st-value" style="text-align: left;">
                                              <div class="qv-st-value-overflow">
                                                <span>${cell}</span>
                                              </div>
                                            </div>
                                          </td>`;
                                        });
                                        table += `<tr>`;
                                      }
                                    });

                                    setTimeout(() => {
                                      document.getElementById(this.cell.name).innerHTML = table;
                                    }, 1000);
                                    break;
                                }
                              });
                          });
                        });
                      });
                    });
                    break;
                  case 'table':
                    element.style.cssText += `overflow-x: hidden; overflow-y: auto;`;
                    element.dataset.visualization = 'table';
                    element.innerHTML = `<h1 class="qv-object-title qvt-visualization-title" title="${result.title}" style="font-size: 1.15385em; font-family: &quot;QlikView Sans&quot;; color: rgb(128, 128, 128);">${result.title}</h1>`;
                    element.innerHTML += `<table id="${this.cell.name}" style="font-size: 13px; color: rgb(89, 89, 89); width: 100%"></table>`;

                    let table = '';

                    result.data.forEach((row, index) => {
                      if (index == 0) {
                        table += `<tr style="font-size: 13px; color: rgb(89, 89, 89);">`;
                        row.forEach((cell) => {
                          table += `<th class="qv-st-header-cell ui-draggable ui-draggable-handle ui-draggable-disabled qv-st-header-sortable qv-st-header-cell-dimension">
                            <div class="qv-st-header-cell-wrapper">
                              <div class="qv-st-value" style="text-align: left;">
                                <div class="qv-st-value-overflow">
                                  <span>${cell}</span>
                                </div>
                              </div>
                            </div>
                          </th>`;
                        });
                        table += `<tr>`;
                      } else {
                        table += `<tr class="qv-st-data-row qv-grid-object-data-first-row">`;
                        row.forEach((cell) => {
                          table += `<td class="qv-st-data-cell qv-st-data-cell-dimension-value">
                            <div class="qv-st-value" style="text-align: left;">
                              <div class="qv-st-value-overflow">
                                <span>${cell}</span>
                              </div>
                            </div>
                          </td>`;
                        });
                        table += `<tr>`;
                      }
                    });

                    setTimeout(() => {
                      document.getElementById(this.cell.name).innerHTML = table;
                    }, 1000);
                    break;
                  default:
                    break;
                }
              })
              .catch((error) => {
                console.log('%c*** error ***', 'background: #FF0000; color: #FFFFFF; font-weight: bold;');
                console.log(error);
              });
          }
        }

        this.handlerClick = (event) => {
          const visualizations = document.querySelectorAll('[data-visualization]');

          if (filter[event.qFieldName]) {
            filter[event.qFieldName].qText.push(
              {
                qText: event
              },
            );
          } else {
            filter[event.qFieldName] = {
              qFieldName: event.qFieldName,
              qText: [
                {
                  qText: event.qText,
                },
              ],
            };
          }
                            $rootScope.filterChanges();

          visualizations.forEach((visualization) => {
            Report.get({
              command: 'fieldselect',
              qDocId: this.app,
              qId: visualization.dataset.qId,
              filter: {
                qFieldName: event.qFieldName,
                qText: event.qText,
              }
            }).$promise
              .then((result) => {
                switch (result.type) {
                  case 'barchart':
                    barchart(visualization, result);
                    break;
                  case 'barchart-stacked':
                    barchartStacked(visualization, result);
                    break;
                  case 'combochart':
                    combochart(visualization, result);
                    break;
                  case 'linechart':
                    linechart(visualization, result);
                    break;
                  case 'piechart':
                    piechart(visualization, result);
                    break;
                  case 'scatterplot':
                    scatterplot(visualization, result);
                    break;
                  case 'table':
                    visualization.style.cssText += `overflow-x: hidden; overflow-y: auto;`;
                    visualization.dataset.visualization = 'table';
                    visualization.innerHTML = '';
                    visualization.innerHTML = `<h1 class="qv-object-title qvt-visualization-title" title="${result.title}" style="font-size: 1.15385em; font-family: &quot;QlikView Sans&quot;; color: rgb(128, 128, 128);">${result.title}</h1>`;
                    visualization.innerHTML += `<table id="${this.cell.name}" style="font-size: 13px; color: rgb(89, 89, 89); width: 100%"></table>`;

                    let table = '';

                    result.data.forEach((row, index) => {
                      if (index == 0) {
                        table += `<tr style="font-size: 13px; color: rgb(89, 89, 89);">`;
                        row.forEach((cell) => {
                          table += `<th class="qv-st-header-cell ui-draggable ui-draggable-handle ui-draggable-disabled qv-st-header-sortable qv-st-header-cell-dimension">
                            <div class="qv-st-header-cell-wrapper">
                              <div class="qv-st-value" style="text-align: left;">
                                <div class="qv-st-value-overflow">
                                  <span>${cell}</span>
                                </div>
                              </div>
                            </div>
                          </th>`;
                        });
                        table += `<tr>`;
                      } else {
                        table += `<tr class="qv-st-data-row qv-grid-object-data-first-row">`;
                        row.forEach((cell) => {
                          table += `<td class="qv-st-data-cell qv-st-data-cell-dimension-value">
                            <div class="qv-st-value" style="text-align: left;">
                              <div class="qv-st-value-overflow">
                                <span>${cell}</span>
                              </div>
                            </div>
                          </td>`;
                        });
                        table += `<tr>`;
                      }
                    });

                    setTimeout(() => {
                      document.getElementById(this.cell.name).innerHTML = table;
                    }, 1000);
                    break;
                }
              });
          });
        }

        $rootScope.filterClear = (qFieldName) => {
            const visualizations = document.querySelectorAll('[data-visualization]');

                        filter[qFieldName] = {
                          qFieldName,
                          qText: [],
                        };
$rootScope.filterChanges();
                        visualizations.forEach((visualization) => {
                          Report.get({
                            command: 'fieldclear',
                            qDocId: this.app,
                            qId: visualization.dataset.qId,
                            qFieldName: qFieldName,
                          }).$promise
                            .then((result) => {
                              switch (result.type) {
                                case 'barchart':
                                  barchart(visualization, result);
                                  break;
                                case 'barchart-stacked':
                                  barchartStacked(visualization, result);
                                  break;
                                case 'combochart':
                                  combochart(visualization, result);
                                  break;
                                case 'linechart':
                                  linechart(visualization, result);
                                  break;
                                case 'piechart':
                                  piechart(visualization, result);
                                  break;
                                case 'scatterplot':
                                  scatterplot(visualization, result);
                                  break;
                                case 'table':
                                  visualization.style.cssText += `overflow-x: hidden; overflow-y: auto;`;
                                  visualization.dataset.visualization = 'table';
                                  visualization.innerHTML = `<h1 class="qv-object-title qvt-visualization-title" title="${result.title}" style="font-size: 1.15385em; font-family: &quot;QlikView Sans&quot;; color: rgb(128, 128, 128);">${result.title}</h1>`;
                                  visualization.innerHTML += `<table id="${this.cell.name}" style="font-size: 13px; color: rgb(89, 89, 89); width: 100%"></table>`;

                                  let table = '';

                                  result.data.forEach((row, index) => {
                                    if (index == 0) {
                                      table += `<tr style="font-size: 13px; color: rgb(89, 89, 89);">`;
                                      row.forEach((cell) => {
                                        table += `<th class="qv-st-header-cell ui-draggable ui-draggable-handle ui-draggable-disabled qv-st-header-sortable qv-st-header-cell-dimension">
                                          <div class="qv-st-header-cell-wrapper">
                                            <div class="qv-st-value" style="text-align: left;">
                                              <div class="qv-st-value-overflow">
                                                <span>${cell}</span>
                                              </div>
                                            </div>
                                          </div>
                                        </th>`;
                                      });
                                      table += `<tr>`;
                                    } else {
                                      table += `<tr class="qv-st-data-row qv-grid-object-data-first-row">`;
                                      row.forEach((cell) => {
                                        table += `<td class="qv-st-data-cell qv-st-data-cell-dimension-value">
                                          <div class="qv-st-value" style="text-align: left;">
                                            <div class="qv-st-value-overflow">
                                              <span>${cell}</span>
                                            </div>
                                          </div>
                                        </td>`;
                                      });
                                      table += `<tr>`;
                                    }
                                  });

                                  setTimeout(() => {
                                    document.getElementById(this.cell.name).innerHTML = table;
                                  }, 1000);
                                  break;
                              }
                            });
                        });
        }
      }
    ]
  });
