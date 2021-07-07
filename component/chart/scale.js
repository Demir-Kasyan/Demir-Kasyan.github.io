const scale = (data, qDimension, qMeasure) => ({
  color: {
    data: {
      extract: {
        field: data[0].data[0][0],
      }
    },
    range: color,
    type: 'color',
  },
  name: [
    {
      type: 'text',
      text: qMeasure.join(', '),
      layout: {
        dock: 'left'
      },
      style: {
        text: {
          fontFamily: 'sans-serif',
          fontSize: '12px',
        }
      },
    },
    {
      type: 'text',
      text: qDimension[0],
      layout: {
        dock: 'bottom'
      },
      style: {
        text: {
          fontFamily: 'sans-serif',
          fontSize: '12px',
        }
      },
    }
  ],
  scales: {
    x: {
      data: {
        field: qDimension[0],
      },
      padding: 0.3,
    },
    y: {
      data: { fields: qMeasure },
      invert: true,
      expand: 0.1,
    },
  },
});
