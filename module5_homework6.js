let checkElemIdentity = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
      console.log('False');
      return;
    }
  }

  console.log('True');
  return;
};

checkElemIdentity([1, 1, 1, 2]);