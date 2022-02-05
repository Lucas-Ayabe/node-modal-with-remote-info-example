import PersonController from "./controllers/PersonController";
import { FakePersonRepository, PersonRepository } from "./repositories";

const personRepository: PersonRepository = new FakePersonRepository();
const personController = new PersonController(personRepository);
export { personRepository, personController };
