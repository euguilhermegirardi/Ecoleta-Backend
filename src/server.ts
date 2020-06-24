import express from "express";

import routes from "./routes";

const app = express();

app.use(express.json()); // The server will understand JSON.
app.use(routes);
app.listen(3333);
