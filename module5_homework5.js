let getArrayInfo = (arr) => {
  console.log(`Длина массива ${arr.length} элементов`);
  arr.forEach(elem => console.log(elem));
};

getArrayInfo([1, '341', 'Home', true, 3232]);