const getTypeOfX = (x) => {
  switch(typeof(x)) {
    case 'boolean': console.log('x - булево значение');
      break;
    case 'number': console.log('x - число');
      break;
    case 'string': console.log('x - строка');
      break;
    default: console.log('Тип x не определен');
      break;
  }
};

getTypeOfX(5);