'use strict';

angular.
  module('component.d3').
  component('d3Linechart', {
    bindings: {
      qObject: '<',
      qDataPages: '<',
    },
    controller: ['$element',
      function d3Linechart($element) {
        this.$onInit = (init) => {
          console.log('%c*** onInit ***', 'background: #0000BB; color: #FFFFFF; font-weight: bold;');
          console.log(this.qObject);
          console.log($element[0]);

          this.element = $element[0];
          angular.element($element).ready(this.render);
        }
        this.$onChanges = (changes) => {
          console.log('%c*** onChanges ***', 'background: #0000BB; color: #FFFFFF; font-weight: bold;');
          console.log(changes);
          this.qObject.qLayout.qHyperCube.qDataPages = this.qDataPages;
          this.render(this.element, this.qObject.layout);
        }

        this.render = () => {
          const element = this.element;
          const layout = this.qObject.qLayout;

          console.log('%c*** render ***', 'background: #0000BB; color: #FFFFFF; font-weight: bold;');
          console.log(element);
          console.log(layout);

          if(element) {
            const qDimension = layout.qHyperCube.qDimensionInfo.map((item) => item.qFallbackTitle);
            const qMeasure = layout.qHyperCube.qMeasureInfo.map((item) => item.qFallbackTitle);
            const columns = [
              ...qDimension,
              ...qMeasure,
            ];

            const data = layout.qHyperCube.qDataPages[0].qMatrix.map((item) => {
              return item.reduce((element, _item, index) => {
                element[columns[index]] = (index == 0 || _item.qNum == 'NaN') ? _item.qText : _item.qNum;

                return element;
              }, {});
            });
            data.columns = columns;

            console.log('%c*** data ***', 'background: #0000DD; color: #FFFFFF; font-weight: bold;');
            console.log(data);

            const format = d3.format('.0%');

            let height = document.documentElement.clientHeight * this.qObject.bounds.height / 100 - 10;
            let width = document.documentElement.clientWidth * this.qObject.bounds.width / 100 - 10;
            height = isNaN(height) ? 420 : height;
            width = isNaN(width) ? 750 : width;

            const miniMargin = {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            }
            const miniHeight = height - miniMargin.top - miniMargin.bottom;
            const miniWidth = (layout.scrollbar == 'miniChart') ? 40 : 0;

            const mainMargin = {
              top: 40,
              right: 0,
              bottom: 60,
              left: 0,
            }
            const mainHeight = height - mainMargin.top - mainMargin.bottom;
            const mainWidth = width - (miniWidth + mainMargin.right + mainMargin.left);
            const mainGroupPositionTranslate = `${mainMargin.left},${mainMargin.top}`;
            const miniGroupPositionTranslate = `${parseFloat(width - (miniWidth + miniMargin.right + miniMargin.left))},${miniMargin.top}`;
            const xAxisPositionTranslate = `${mainMargin.left},${mainHeight}`;
            const yAxisPositionTranslate = `${mainMargin.left},0`;

            const svg = d3
              .select(element)
              .append('svg')
              .attr('width', width)
              .attr('height', height)
            ;

            const mainGroup = svg
              .append('g')
              .attr('transform', `translate(${mainGroupPositionTranslate})`)
            ;

            const mainXScale = d3
              .scaleBand()
              .domain(data.map(d => d[columns[0]]))
              .range([0, mainWidth])
            ;

            const mainYScale = d3
              .scaleLinear()
              .domain([0, d3.max(data, d => !isNaN(d[columns[1]]) ? d[columns[1]] : undefined)])
              .range([mainHeight, 0])
            ;

            const xAxis = g => g
              .attr('transform', `translate(${xAxisPositionTranslate})`)
              .call(
                d3
                .axisBottom(mainXScale)
              )
            ;

            const yAxis = g => g
              .attr('transform', `translate(${yAxisPositionTranslate})`)
              .call(
                d3
                .axisLeft(mainYScale)
                .tickFormat(format)
              )
            ;

            const grid = g => g
              .attr('stroke-opacity', 0.1)
              .attr('stroke', 'currentColor')
              .selectAll('line')
              .data(mainYScale.ticks())
              .join('line')
              .attr('y1', d => 0.5 + mainYScale(d))
              .attr('y2', d => 0.5 + mainYScale(d))
              .attr('x1', mainMargin.left)
              .attr('x2', mainWidth)
            ;

            const line = d3
              .line()
              .defined(d => !isNaN(d[columns[1]]))
              .x(d => mainXScale(d[columns[0]]))
              .y(d => mainYScale(d[columns[1]]))
            ;

            const tooltip = svg
              .append('g')
            ;

            const tooltipHandler = (g, value) => {
              if(!value) {
                return g.style('display', 'none');
              }

              g
                .style('display', null)
                .style('pointer-events', 'none')
                .style('font', '10px sans-serif')
              ;

              const path = g
                .selectAll('path')
                .data([null])
                .join('path')
                .attr('fill', 'white')
                .attr('stroke', 'black')
              ;

              const text = g
                .selectAll('text')
                .data([null])
                .join('text')
                .call(text => text
                  .selectAll('tspan')
                  .data((value + '').split(/\n/))
                  .join('tspan')
                  .attr('x', 0)
                  .attr('y', (d, i) => `${i * 1.1}em`)
                  .style('font-weight', (_, i) => i ? null : 'bold')
                  .text(d => d)
                )
              ;

              const {x, y, width: w, height: h} = text.node().getBBox();

              text.attr('transform', `translate(${-w / 2},${15 - y})`);
              path.attr('d', `M${-w / 2 - 10},5H-5l5,-5l5,5H${w / 2 + 10}v${h + 20}h-${w + 20}z`);
            }

            svg
              .append('g')
              .call(xAxis)
            ;

            svg
              .append('g')
              .call(yAxis)
            ;

            svg
              .append('g')
              .call(grid)
            ;

            svg
              .append('path')
              .datum(data)
              .attr('fill', 'none')
              .attr('stroke', 'steelblue')
              .attr('stroke-linejoin', 'round')
              .attr('stroke-linecap', 'round')
              .attr('stroke-width', 1.5)
              .attr('d', line)
            ;

            svg
              .append('g')
              .attr('stroke', 'steelblue')
              .attr('stroke-width', 1.5)
              .attr('fill', 'steelblue')
              .selectAll('circle')
              .data(data.filter(line.defined()))
              .join('circle')
              .attr('cx', d => mainXScale(d[columns[0]]))
              .attr('cy', d => mainYScale(d[columns[1]]))
              .attr('r', 2)
              .on('touchmove mousemove', function(event) {
                const datum = d3
                  .select(event.target)
                  .datum()
                ;

                tooltip
                  .attr('transform', `translate(${mainXScale(datum[columns[0]])},${mainYScale(datum[columns[1]])})`)
                  .call(tooltipHandler, `${datum[columns[0]]}
                  ${format(datum[columns[1]])}`)
                ;
              })
            ;

            svg
              .append('g')
              .attr('font-family', 'sans-serif')
              .attr('font-size', 10)
              .selectAll('text')
              .data(data.filter(line.defined()))
              .join('text')
              .attr('dy', '1em')
              // .attr('dy', '0.35em')
              .attr('x', d => mainXScale(d[columns[0]]) + 7)
              .attr('y', d => mainYScale(d[columns[1]]))
              .text(d => format(d[columns[1]]))
            ;


            // svg.on('touchmove mousemove', function(event) {
            //   const {date, value} = bisect(d3.pointer(event, this)[0]);
            //
            //   console.log(date, value);
            // });
            //
            // function bisect(mx) {
            //   const bisector = d3.bisector(d => {
            //     console.log(d);
            //
            //     return d.date;
            //   }).left;
            //
            //   return mx => {
            //     const date = mainXScale.invert(mx);
            //
            //     console.log(date);
            //
            //     const index = bisector(data, date, 1);
            //     const a = data[index - 1];
            //     const b = data[index];
            //     return b && (date - a.date > b.date - date) ? b : a;
            //   };
            // }

          }
        }
      }
    ]
  });
