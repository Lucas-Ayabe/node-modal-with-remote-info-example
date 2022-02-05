import { Request, Response, Router } from "express";
import * as Context from "./context";

export const notFound = (_: Request, response: Response) => {
  response.status(404).send("404 - Page Not Found!");
};

const router = Router();
router.get("/", Context.personController.list);
router.get("/person/:id", Context.personController.find);

export default router;
