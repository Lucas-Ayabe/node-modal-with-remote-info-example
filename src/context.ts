import PersonController from "./controllers/PersonController";
import { FakePersonRepository } from "./repositories";

const personRepository = new FakePersonRepository();
const personController = new PersonController(personRepository);
export { personRepository, personController };
