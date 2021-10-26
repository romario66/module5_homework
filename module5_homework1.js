const value = +prompt('Введите значение', '');

if (typeof(value) === 'number' && !isNaN(value)) {
  if (value % 2 === 0) {
    console.log('Четное число');
  } else {
    console.log('Нечетное число');
  }
} else {
  console.log('Упс, кажется, вы ошиблись');
}
