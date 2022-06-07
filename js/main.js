function getRandomInt(min, max) {
  if (max <= min) {
    return console.log('Измените значение max. Оно должно быть больше значения min');
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

getRandomInt(0, 9)

