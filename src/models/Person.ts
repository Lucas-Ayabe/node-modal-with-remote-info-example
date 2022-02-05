export default class Person {
  constructor(readonly id: number, private name: string, private age: number) {}

  celebrateBirthday() {
    this.age++;
  }

  toString() {
    return JSON.stringify({
      id: this.id,
      name: this.name,
      age: this.age,
    });
  }
}
