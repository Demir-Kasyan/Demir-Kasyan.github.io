const legend = (qMeasure, _color = color) => ({
  key: 'legend',
  type: 'legend-cat',
  scale: {
    data: qMeasure,
    range: _color,
    type: 'categorical-color'
  },
  dock: 'right',
  settings: {
    title: {
      show: false,
    },
    item: {
      shape: { type: 'circle' }
    },
  },
});
