import express from "express";
import path from "path";
import mustache from "mustache-express";
import routes, { notFound } from "./routes";
import cors from "cors";

const app = express();
const port = 3000;

const fromSrc = (...paths: string[]) => path.join(__dirname, ...paths);

app.use(cors());
app.set("view engine", "mustache");
app.set("views", fromSrc("views"));
app.engine("mustache", mustache());

app.use(express.static(fromSrc("../public")));
app.use(routes);
app.use(notFound);

const welcome = `App listening on http://localhost:${port}`;
app.listen(port, () => console.log(welcome));
