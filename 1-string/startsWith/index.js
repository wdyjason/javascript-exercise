export default function collectCarNumberCount(collection) {
  // TODO 7: 在这里写实现代码
  const result = [];
  collection.array.forEach(element => {
    if (element.startWith('A', 1)) {
      result.push(element);
    }
  });
  return result;
}
