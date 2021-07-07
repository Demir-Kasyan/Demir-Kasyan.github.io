const piechart = (element, qObject, handler) => {
  const { data, color, components, qDimension } = qObject;

  picasso.chart({
    element,
    data,
    settings: {
      scales: {
        color: {
          data: {
            extract: {
              field: data[0].data[0][0],
            }
          },
          range: color,
          type: 'color',
        }
      },
      components: [
        ...components,
        {
          key: 'pie',
          type: 'pie',
          data: {
            extract: {
              field: data[0].data[0][0],
              props: {
                num: {
                  field: data[0].data[0][1],
                }
              }
            }
          },
          settings: {
            slice: {
              outerRadius: 0.6,
              arc: {
                ref: 'num'
              },
              fill: {
                scale: 'color'
              },
            }
          }
        },
        {
          type: 'labels',
          settings: {
            sources: [{
              component: 'pie',
              selector: 'path',
              strategy: {
                type: 'slice',
                settings: {
                  labels: [
                    {
                      label: d => d.data.label,
                      fill: '#444',
                      placements: [
                        {
                          position: 'outside'
                        }
                      ]
                    },
                  ]
                }
              }
            }]
          }
        },
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
