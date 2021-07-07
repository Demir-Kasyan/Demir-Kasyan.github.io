const scatterplot = (element, qObject, handler) => {
  function point(index) {

    return {
      key: 'points',
      type: 'point',
      data: {
        extract: {
          field: qDimension[0],
          props: {
            x: {
              field: qMeasure[0]
            },
            y: {
              field: qMeasure[1]
            },
            size: {
              field: qMeasure[2],
            },
          }
        }
      },
      settings: {
        x: {
          scale: 'x'
        },
        y: {
          scale: 'y'
        },
        size: {
          scale: 'size',
        },
        shape: 'circle',
        strokeWidth: 1,
        stroke: color[index],
        opacity: 0.8,
        fill: color[index],
      }
    }
  }

  const { data, components, color, qDimension, qMeasure } = qObject;
  const points = qDimension.map((item, index) => point(index));

  const labels = {
    type: 'labels',
    settings: {
      sources: [
        {
          component: 'points',
          selector: 'circle',
          strategy: {
            type: 'bar',
            settings: {
              direction: 'right',
              fontSize: 10,
              labels: [
                {
                  placements: [
                    { 
                      position: 'outside',
                      fill: 'black',
                    }
                  ],
                  label: ({ data }) => `${data.label}`,
                }
              ]
            }
          }
        }
      ]
    }
  }

  picasso.chart({
    element,
    data,
    settings: {
      scales: {
        x: {
          data: {
            field: qMeasure[0],
          },
          padding: 0.5,
        },
        y: {
          data: {
            field: qMeasure[1],
          },
          invert: true,
          expand: 0.1,
          padding: 0.5,
        },
        size: {
          data: {
            field: qMeasure[2],
          }
        },
      },
      components: [
        ...components,
        ...points,
        labels,
        {
          key: 'tooltip',
          type: 'tooltip',
          displayOrder: 1000,
          settings: { 
            duration: 10000,
            extract: ({ node }) => (node.data.num) ? `${node.data.label}: ${node.data.num.value}` : node.data.label,
            placement: {
              type: 'pointer',
              dock: 'top',
              offset: 8,
              area: 'viewport'
            }
          },
        },
      ],
      interactions: [
        {
          type: 'native',
          events: {
            mousemove(e) {
              const tooltip = this.chart.component('tooltip');
              tooltip.emit('show', e);
            },
            mouseleave(e) {
              const tooltip = this.chart.component('tooltip');
              tooltip.emit('hide');
            },
            click(e) {
              handler({
                qFieldName: qDimension[0],
                qText: e.target.dataset.value,
              });
            },
          }
        }
      ],
    }
  });
}
