const map = new Map([
  ['Hello', true],
  [25, [1, 2, 4]],
  [{city: 'Moscow'}, null],
  [undefined, NaN],
  ['72', 5.32]
]);

for (const [key, value] of map) {
  const str = `Свойство - ${key}, Значение - ${value}`;
  console.log(str);
}