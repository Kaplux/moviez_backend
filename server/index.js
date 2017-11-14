const express = require("express");
const app = express();
const fs = require("fs");
const https = require("https");

const privateKey = fs.readFileSync("sslcert/server.key", "utf8");
const certificate = fs.readFileSync("sslcert/server.cert", "utf8");
const credentials = { key: privateKey, cert: certificate };

const bodyParser = require("body-parser");

const auth = require("./auth.js");

const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const schema = require("./schema");

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.get("/api", function(req, res) {
  res.send("Hello World!");
});

app.post("/api/login", function(req, res) {
  if (req.body.email && req.body.password) {
    var email = req.body.email;
    var password = req.body.password;
  }

  const token = auth(email, password);

  if (token) {
    res.json({ message: "ok", token: token });
  } else {
    res.status(401).json({ message: "passwords did not match" });
  }
});

app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));
app.use(
  "/graphiql",
  graphiqlExpress({
    endpointURL: "/graphql"
  })
);

var httpsServer = https.createServer(credentials, app);
httpsServer.listen(8443);
