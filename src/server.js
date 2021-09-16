import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check
app.get("/", (req, res) => {
  res.send(`I'm Alive!`);
});

app.listen(3000, () => {
  console.log("Listening on port 3000 🚀");
});
