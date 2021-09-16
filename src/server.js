import express from "express";
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", routes);

// Health Check
app.get("/", (req, res) => {
  res.send(`I'm Alive!`);
});

app.listen(3000, () => {
  console.log("Listening on port 3000 🚀");
});
