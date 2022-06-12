import Express from "express";
import {Login} from "./api/login.ts";
import {Register} from "./api/register.ts";
import bodyParser from "body-parser"

const app = Express();
const PORT = 1234;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello")
});

app.post("/api/v1/login", Login);
app.post("/api/v1/register", Register);

app.listen(PORT, () => {
  console.log(`Server ready on https://localhost:${PORT}/`);
})