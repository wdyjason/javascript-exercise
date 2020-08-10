export default function find00OldPerson(collection) {
  // TODO 4: 在这里写实现代码
  const maxAge = 20;
  const minAge = 10;
  const result = collection.find(e => e.age < maxAge && e.age > minAge);
  return result.name;
}
