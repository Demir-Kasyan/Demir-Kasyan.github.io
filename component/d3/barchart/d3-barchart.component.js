'use strict';

angular.
  module('component.d3').
  component('d3Barchart', {
    bindings: {
      qObject: '<',
      qDataPages: '<',
    },
  controller: ['$element',
    function d3Linechart($element) {
      this.$onInit = (init) => {
        this.element = $element[0];
        angular.element($element).ready(this.render);
      }
      this.$onChanges = (changes) => {
        this.qObject.qLayout.qHyperCube.qDataPages = this.qDataPages;
        this.render(this.element, this.qObject.layout);
      }

      this.render = () => {
        const element = this.element;
        const layout = this.qObject.qLayout;

        if (element) {
          const qDimension = layout.qHyperCube.qDimensionInfo.map((item) => item.qFallbackTitle);
          const qMeasure = layout.qHyperCube.qMeasureInfo.map((item) => item.qFallbackTitle);
          const columns = [
            ...qDimension,
            ...qMeasure,
          ];

          const dt = layout.qHyperCube.qDataPages[0].qMatrix.map((item) => {
            return item.reduce((element, _item, index) => {
              element[columns[index]] = (index == 0 || _item.qNum == 'NaN') ? _item.qText : _item.qNum;
              return element;
              ;
            }, {});
          });
          dt.columns = columns;
          let data = [];
          let groups = []; // track unique groups
          dt.forEach((record)=> {
            let group = record[dt.columns[0]];
            if (groups.indexOf(group) < 0) {
              groups.push(group); // push to unique groups tracking
              data.push({ // push group node in data
                group: group,
                axes: []
              });
            };
            data.forEach(function(d) {
              if (d.group === record[dt.columns[0]]) { // push record data into right group in data
                d.axes.push({
                  axis: record[dt.columns[0]],
                  value: parseInt(record[dt.columns[2]]),
                  description: dt.columns[1]+" "+record[dt.columns[1]]
                });
              }
            });
          });

          let h = document.documentElement.clientHeight / 2;
          let w = document.documentElement.clientWidth / 2;

          let over = "ontouchstart" in window ? "touchstart" : "mouseover";
          let out = "ontouchstart" in window ? "touchend" : "mouseout";
          const config = {
            w: w,
            h: h,
            facet: false,
            levels: 6,
            levelScale: 0.85,
            labelScale: 1.0,
            facetPaddingScale: 2.5,
            maxValue: this.qObject.qLayout.maxValue,
            radians: 2 * Math.PI,
            polygonAreaOpacity: 0.3,
            polygonStrokeOpacity: 1,
            polygonPointSize: 5,
            legendBoxSize: 10,
            translateX: w / 4,
            translateY: h / 4,
            paddingX: w,
            paddingY: h,
            colors: this.qObject.qLayout.ColorSchema,
            showLevels: true,
            showLevelsLabels: true,
            showAxesLabels: false,
            showAxes: true,
            showLegend: this.qObject.qLayout.showLegend,
            showVertices: true,
            showPolygons: true
          };
          var vis = {
            svg: null,
            tooltip: null,
            levels: null,
            axis: null,
            vertices: null,
            legend: null,
            allAxis: null,
            total: null,
            radius: null
          };
          // feed user configuration options
          if ("undefined" !== typeof options) {
            for (var i in options) {
              if ("undefined" !== typeof options[i]) {
                config[i] = options[i];
              }
            }
          }
          render(data); // render the visualization
          function render(data) {
            d3.select(element).selectAll("svg").remove();
            updateConfig();

            if (config.facet) {
              data.forEach(function(d, i) {
                buildVis([d]); // build svg for each data group

                vis.svg.selectAll(".polygon-areas")
                    .attr("stroke", config.colors[i])
                    .attr("fill", config.colors[i]);
                vis.svg.selectAll(".polygon-vertices")
                    .attr("fill", config.colors[i]);
                vis.svg.selectAll(".legend-tiles")
                    .attr("fill", config.colors[i]);
              });
            } else {
              buildVis(data); // build svg
            }
          }
          function updateConfig() {
            config.maxValue = Math.max(config.maxValue, d3.max(data, (d) => {
              return d3.max(d.axes, (o)=> { return o.value; });
            }));
            config.w *= config.levelScale;
            config.h *= config.levelScale;
            config.paddingX = config.w * config.levelScale;
            config.paddingY = config.h * config.levelScale;
            if (config.facet) {
              config.w /= data.length;
              config.h /= data.length;
              config.paddingX /= (data.length / config.facetPaddingScale);
              config.paddingY /= (data.length / config.facetPaddingScale);
              config.polygonPointSize *= Math.pow(0.9, data.length);
            }
          }
          function buildVis(data) {
            buildVisComponents();
            buildCoordinates(data);
            if (config.showLevels) buildLevels();
            if (config.showLevelsLabels) buildLevelsLabels();
            if (config.showAxes) buildAxes();
            if (config.showAxesLabels) buildAxesLabels();
            if (config.showLegend) buildLegend(data);
            if (config.showVertices) buildVertices(data);
            if (config.showPolygons) buildPolygons(data);
          }
          function buildVisComponents() {
            vis.allAxis = data[0].axes.map((i, j)=> { return i.axis; });
            vis.totalAxes = vis.allAxis.length;
            vis.radius = Math.min(config.w / 2, config.h / 2);

            vis.svg = d3.select(element)
                .append("svg").classed("svg-vis", true)
                .attr("width", config.w + config.paddingX)
                .attr("height", config.h + config.paddingY)
                .append("svg:g")
                .attr("transform", "translate(" + config.translateX + "," + config.translateY + ")");;

            vis.verticesTooltip = d3.select("body")
                .append("div").classed("verticesTooltip", true)
                .attr("opacity", 0)
                .style("position", "absolute")
                .style("color", "black")
                .style("font-size", "10px")
                .style("width", "100px")
                .style("height", "auto")
                .style("border", "2px solid gray")
                .style("pointer-events", "none")
                .style("opacity", "0")
                .style("background-color", "#f4f4f4");


            vis.levels = vis.svg.selectAll(".levels")
                .append("svg:g").classed("levels", true);

            vis.axes = vis.svg.selectAll(".axes")
                .append("svg:g").classed("axes", true);

            vis.vertices = vis.svg.selectAll(".vertices");

            vis.legend = vis.svg.append("svg:g").classed("legend", true)
                .attr("height", config.h / 2)
                .attr("width", config.w / 2)
                .attr("transform", "translate(" + 0 + ", " + 1.1 * config.h + ")");
          }
          function buildLevels() {
            for (var level = 0; level < config.levels; level++) {
              var levelFactor = vis.radius * ((level + 1) / config.levels);

            vis.levels.data(vis.allAxis).enter()
                  .append("svg:circle").classed("level-lines", true)
                  .style("stroke", "gray")
                  .style("fill", "none")
                  .attr("r", function(d, i) {
                    return levelFactor * Number.parseInt("1." + ((config.maxValue/Number.
                            parseInt("1e"+(config.maxValue.toString().length))))); })
                  .attr("cx", config.w / 2)
                  .attr("cy", config.h / 2)
                  ;
            }
          }
          function buildLevelsLabels() {
            for (let level = 0; level < config.levels; level++) {
              let levelFactor = vis.radius * ((level + 1) / config.levels);

              vis.levels
                  .data([1]).enter()
                  .append("svg:text").classed("level-labels", true)
                  .text((config.maxValue * (level + 1) / config.levels).toFixed(2))
                  .attr("x", function(d) { return levelFactor * (1 - Math.sin(0)); })
                  .attr("y", function(d) { return levelFactor * (1 - Math.cos(0)); })
                  .attr("transform", "translate(" + (config.w / 2 - levelFactor + 5) + ", " + (config.h / 2 - levelFactor) + ")")
                  .attr("fill", "gray")
                  .attr("font-family", "sans-serif")
                  .attr("font-size", 10 * config.labelScale + "px");
            }
          }
          function buildAxes() {
            vis.axes
                .data(vis.allAxis).enter()
                .append("svg:line").classed("axis-lines", true)
                .attr("x1", config.w / 2)
                .attr("y1", config.h / 2)
                .attr("x2", function(d, i) { return config.w / 2 * (1 - Math.sin(i * config.radians / vis.totalAxes)) + (i%3===0?0:i%2===0?-55:55); })
                .attr("y2", function(d, i) { return config.h / 2 * (1 - Math.cos(i * config.radians / vis.totalAxes)); })
                .attr("stroke", "grey")
                .attr("stroke-width", "1px");
          }
          function buildAxesLabels() {
            vis.axes
                .data(vis.allAxis).enter()
                .append("svg:text").classed("axis-labels", true)
                .text(function(d) { return d; })
                .attr("text-anchor", "middle")
                .attr("x", function(d, i) { return config.w / 2 * (1 - 1.3 * Math.sin(i * config.radians / vis.totalAxes))  + (i%3===0?0:i%2===0?-55:55); })
                .attr("y", function(d, i) { return config.h / 2 * (1 - 1.1 * Math.cos(i * config.radians / vis.totalAxes)); })
                .attr("font-family", "sans-serif")
                .attr("font-size", 11 * config.labelScale + "px");
          }
          function buildCoordinates(data) {
            data.forEach(function(group) {
              group.axes.forEach(function(d, i) {
                d.coordinates = {
                  x: config.w / 2 * (1 - (parseFloat(Math.max(d.value, 0)) / config.maxValue) * Math.sin(i * config.radians / vis.totalAxes))  + (i%3===0?0:i%2===0?-55:55),
                  y: config.h / 2 * (1 - (parseFloat(Math.max(d.value, 0)) / config.maxValue) * Math.cos(i * config.radians / vis.totalAxes))
                };
              });
            });
          }
          function buildVertices(data) {
            data.forEach(function(group, g) {
              vis.vertices
                  .data(group.axes).enter()
                  .append("svg:circle").classed("polygon-vertices", true)
                  .attr("r", config.polygonPointSize)
                  .attr("cx", function(d, i) { return d.coordinates.x; })
                  .attr("cy", function(d, i) { return d.coordinates.y; })
                  .attr("fill", config.colors[g])
                  .on(over, verticesTooltipShow)
                  .on(out, verticesTooltipHide);
            });
          }
          function buildPolygons(data) {
            vis.vertices
                .data(data).enter()
                .append("svg:polygon").classed("polygon-areas", true)
                .attr("points", function(group) { // build verticesString for each group
                  var verticesString = "";
                  group.axes.forEach(function(d) { verticesString += d.coordinates.x + "," + d.coordinates.y + " "; });
                  return verticesString;
                })
                .attr("stroke-width", "2px")
                .attr("stroke", function(d, i) { return config.colors[i]; })
                .attr("fill", function(d, i) { return config.colors[i]; })
                .attr("fill-opacity", config.polygonAreaOpacity)
                .attr("stroke-opacity", config.polygonStrokeOpacity)
                .on(over, function(d) {
                  vis.svg.selectAll(".polygon-areas") // fade all other polygons out
                      .transition(250)
                      .attr("fill-opacity", 0.1)
                      .attr("stroke-opacity", 0.1);
                  d3.select(this) // focus on active polygon
                      .transition(250)
                      .attr("fill-opacity", 0.7)
                      .attr("stroke-opacity", config.polygonStrokeOpacity);
                })
                .on(out, function() {
                  d3.selectAll(".polygon-areas")
                      .transition(250)
                      .attr("fill-opacity", config.polygonAreaOpacity)
                      .attr("stroke-opacity", 1);
                });
          }
          function buildLegend(data) {
            vis.legend.selectAll(".legend-tiles")
                .data(data).enter()
                .append("svg:rect").classed("legend-tiles", true)
                .attr("x", config.w - config.paddingX - 100)
                .attr("y", function(d, i) { return i * 2 * config.legendBoxSize-250; })
                .attr("width", config.legendBoxSize)
                .attr("height", config.legendBoxSize)
                .attr("fill", function(d, g) { return config.colors[g]; });

            vis.legend.selectAll(".legend-labels")
                .data(data).enter()
                .append("svg:text").classed("legend-labels", true)
                .attr("x", config.w - config.paddingX + (1.5 * config.legendBoxSize) - 100)
                .attr("y", function(d, i) { return i * 2 * config.legendBoxSize - 250; })
                .attr("dy", 0.07 * config.legendBoxSize + "em")
                .attr("font-size", 11 * config.labelScale + "px")
                .attr("fill", "gray")
                .text(function(d) {
                  return d.group;
                });
          }
          function verticesTooltipShow(d) {
            vis.verticesTooltip.style("opacity", 0.9)
                .html("<strong>Value</strong>: " + d.target.__data__.value + "<br />" +
                    "<strong>Description</strong>: " + d.target.__data__.description + "<br />")
                .style("left", (d.screenX) + "px")
                .style("top", (d.screenY - 100) + "px");
          }
          function verticesTooltipHide() {
            vis.verticesTooltip.style("opacity", 0);
          }
        }
      }
    }
  ]
});
