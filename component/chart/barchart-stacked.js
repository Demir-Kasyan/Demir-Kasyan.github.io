const barchartStacked = (element, qObject, handler) => {
  const { data, components, color, qDimension, qMeasure } = qObject;

  const collections = [
    {
      key: 'stack',
      data: {
        extract: {
          field: 'Key',
          props: {
            series: {
              field: 'Title',
            },
            end: {
              field: 'Value',
            }
          }
        },
        stack: {
          stackKey: d => d.value,
          value: d => d.end.value
        }
      }
    }
  ];

  const scales = {
    x: {
      data: {
        extract: {
          field: 'Key',
        }
      },
      padding: 0.3,
    },
    y: {
      data: {
        collection: {
          key: 'stack'
        }
      },
      invert: true,
      expand: 0.2,
      min: 0
    },
    color: {
      data: {
        extract: {
          field: data[0].data[0][0],
        }
      },
      range: color,
      type: 'color',
    },
  };

  picasso.chart({
    element,
    data,
    settings: {
      collections,
      scales,
      components: [
        ...components,
        {
          key: 'bars',
          type: 'box',
          data: {
            collection: 'stack'
          },
          settings: {
            major: { scale: 'x' },
            minor: { scale: 'y', ref: 'end' },
            box: {
              fill: { scale: 'color', ref: 'series' }
            }
          }
        },
        {
          key: 'tooltip',
          type: 'tooltip',
          displayOrder: 1000,
          settings: { 
            duration: 10000,
            extract: ({ node }) => (node.data.end && node.data.series) ? `${node.data.series.label}: ${node.data.end.value}` : node.data.label,
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
