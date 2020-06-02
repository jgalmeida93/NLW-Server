import express from "express";

const app = express();

app.get("/users", (request, response) => {
  response.json(["Jonas", "Anderson", "Robson"]);
});

app.listen(3333);
