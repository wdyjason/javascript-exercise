// TODO 17: 在这里写实现代码
import Person from './person';

export default class Woker extends Person {
  constructor(name, age) {
    super(name, age);
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `${super.introduce()} I am a Worker. I have a job.`;
  }
}
