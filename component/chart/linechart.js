const linechart = (element, qObject, handler) => {
  function line(index) {

    const layers = {
      line: {
        stroke: color[index],
      },
    }

    switch (lineType) {
      case 'area':
        layers.area = {
          fill: color[index],
          opacity: 0.4,
        } 
        break;
      default:
        break;
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

  function point(index) {

    return {
      key: 'points',
      type: 'point',
      data: {
        extract: {
          field: qDimension[0],
          props: {
            x: {
              field: qDimension[0]
            },
            y: {
              field: qMeasure[index]
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
        size: 0.2,
        shape: 'circle',
        strokeWidth: 1,
        stroke: color[index],
        opacity: 0.8,
        fill: color[index],
      }
    }
  }

  const { lineType, data, components, color, scales, qDimension, qMeasure } = qObject;
  const lines = qMeasure.map((item, index) => line(index));
  const points = qMeasure.map((item, index) => point(index));

  picasso.chart({
    element,
    data,
    settings: {
      scales,
      components: [
        ...components,
        ...lines,
        ...points,
        {
          key: 'tooltip',
          type: 'tooltip',
          displayOrder: 1000,
          settings: { 
            duration: 10000,
            extract: ({ node }) => (node.data.y) ? `${node.data.y.source.field}: ${node.data.y.value}` : node.data.label,
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
            }
          }
        }
      ],
    }
  });
}
