import express from "express";
import routes from "./routes";
import https from 'https'
import fs from 'fs';
import path from 'path';

const key = fs.readFileSync(path.resolve(__dirname + '../../../certs/localhost+2-key.pem'));
const cert = fs.readFileSync(path.resolve(__dirname + '../../../certs/localhost+2.pem'));
const options = {
  key, 
  cert,
  requestCert: false,
  rejectUnauthorized: false
}
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", routes);

// Health Check
app.get("/", (req, res) => {
  res.send(`I'm Alive!`);
});

const server = https.createServer(options, app);

app.listen(3001, () => console.log("Listening on port 3001"));

server.listen(3000, () => {
  console.log("Listening on port 3000 🚀");
});
