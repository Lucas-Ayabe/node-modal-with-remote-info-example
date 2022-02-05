import { Person } from "../models";
import type PersonRepository from "./PersonRepository";

export default class FakePersonRepository implements PersonRepository {
  private source: Person[];
  constructor() {
    this.source = [
      new Person(1, "Bob", 22),
      new Person(2, "Alice", 19),
      new Person(3, "Flavio", 17),
      new Person(4, "Rodrigo", 33),
      new Person(5, "Roberta", 31),
      new Person(6, "Bianca", 21),
    ];
  }

  async list() {
    return this.source;
  }

  async findById(id: number): Promise<Person> {
    const byId = (person: Person) => person.id === id;
    const maybePerson = this.source.find(byId);
    if (!maybePerson) throw new Error("Person Not Found");
    return maybePerson;
  }
}
