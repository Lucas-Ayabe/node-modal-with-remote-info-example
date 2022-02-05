import { Person } from "../models";

export default interface PersonRepository {
  list(): Promise<Person[]>;
  findById(id: number): Promise<Person>;
}
