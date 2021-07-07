const combochart = (element, qObject, handler) => {
  function box(index) {
    const measure = qMeasure.length;
    const groupWidth = 1 / measure;
    const barWidth = groupWidth;
    const offset = 0.5 / measure;
  
    return {
      type: 'box',
      data: {
        extract: {
          field: 0,
          props: {
            start: 0,
            end: { field: index + 1 } 
          }
        }
      },
      settings: {
        major: {
          scale: 'x',
          fn: function(d) {
            const major = d.scale(d.datum.value) + offset * d.scale.bandwidth() + index * d.scale.bandwidth() * groupWidth;
  
            return major;
          }
        },
        minor: { scale: 'y' },
        box: {
          opacity: 1,
          strokeWidth: 1,
          width: barWidth,
        }
      }
    }
  }

  function line(index) {

    const layers = {
      line: {
        stroke: color[index],
      },
    }

    return {
      key: 'lines',
      type: 'line',
      data: {
        extract: {
          field: qDimension[0],
          props: {
            v: {
              field: qMeasure[index],
            }
          }
        }
      },
      settings: {
        coordinates: {
          major: { scale: 'x' },
          minor: { scale: 'y', ref: 'v' }
        },
        layers,
      }
    }
  }

  const { data, components, color, scales, series, qDimension, qMeasure } = qObject;

  const lines = qMeasure.map((item, index) => (series[index] == 'line') ? line(index) : null).filter((item) => item);
  const bar = qMeasure.map((item, index) => box(index));

  picasso.chart({
    element,
    data,
    settings: {
      scales,
      components: [
        ...components,
        ...bar,
        ...lines,
        {
          key: 'tooltip',
          type: 'tooltip',
          displayOrder: 1000,
          settings: { 
            duration: 10000,
            extract: ({ node }) => (node.data.end) ? `${node.data.end.source.field}: ${node.data.end.value}` : node.data.label,
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
