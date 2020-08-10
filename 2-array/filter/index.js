function chooseMultiplesOfThree(collection) {
  // TODO 1: 在这里写实现代码
  return collection.filter(e => e % 3 === 0);
}

function chooseNoRepeatNumber(collection) {
  // TODO 2: 在这里写实现代码
  const result = [];
  collection.forEach(e => {
    if (result.indexOf(e) === -1) {
      result.push(e);
    }
  });
  return result;
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
