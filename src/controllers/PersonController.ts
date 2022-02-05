import { Request, Response } from "express";
import { PersonRepository } from "../repositories";

export default class PersonController {
  constructor(private personRepository: PersonRepository) {
    this.list = this.list.bind(this);
    this.find = this.find.bind(this);
  }

  async list(_: Request, response: Response) {
    const people = await this.personRepository.list();
    response.render("home", { people });
  }

  async find(request: Request, response: Response) {
    const id = +request.params.id;
    const { status, payload } = await this.personRepository
      .findById(id)
      .then((person) => ({
        status: 200,
        payload: { person },
      }))
      .catch(() => ({
        status: 404,
        payload: { message: "Person not found" },
      }));

    response.status(status).json({ data: payload });
  }
}
