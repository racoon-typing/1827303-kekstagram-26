const slider = document.querySelector('.effect-level__value');

noUiSlider.create(slider, {
  start: [20, 80],
  connect: true,
  range: {
    'min': 0,
    'max': 100
  }
});
