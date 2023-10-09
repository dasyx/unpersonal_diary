import express from "express";
import { checkConnection } from "./fauna.js";

const app = express();

checkConnection();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
