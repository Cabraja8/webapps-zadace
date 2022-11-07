import express from "express";
import bodyParser from "body-parser";

const app = express();

const port = 3000;

app.use(bodyParser.json);

app.get("/dodajObavjest", (req, res) => {
  console.log(tempStorage);
  res.send(tempStorage);
});
app.get("/vratiObavjesti", (req, res) => {
  console.log(tempStorage);
  res.send(tempStorage);
});
app.get("/vratiObavjest", (req, res) => {
  console.log(tempStorage);
  res.send(tempStorage);
});

app.listen(port, () => {
  console.log("Works on port " + port);
});
