const express = require("express");
const app = express();
const fs = require("fs");
const https = require("https");

const privateKey = fs.readFileSync("sslcert/server.key", "utf8");
const certificate = fs.readFileSync("sslcert/server.cert", "utf8");

const credentials = { key: privateKey, cert: certificate };

const _ = require("lodash");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const passport = require("passport");
const passportJWT = require("passport-jwt");

const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

var jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = "tasmanianDevil";

var users = [
  {
    id: 1,
    email: "jonathanmh",
    password: "%2yx4"
  },
  {
    id: 2,
    email: "test",
    password: "test"
  }
];

var strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
  console.log("payload received", jwt_payload);
  // usually this would be a database call:
  var user = users[_.findIndex(users, { id: jwt_payload.id })];
  if (user) {
    next(null, user);
  } else {
    next(null, false);
  }
});

passport.use(strategy);

app.use(passport.initialize());
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
  // usually this would be a database call:
  var user = users[_.findIndex(users, { email: email })];
  if (!user) {
    res.status(401).json({ message: "no such user found" });
  }

  if (user.password === req.body.password) {
    // from now on we'll identify the user by the id and the id is the only personalized value that goes into our token
    var payload = { id: user.id };
    var token = jwt.sign(payload, jwtOptions.secretOrKey);
    res.json({ message: "ok", token: token });
  } else {
    res.status(401).json({ message: "passwords did not match" });
  }
});

var httpsServer = https.createServer(credentials, app);
httpsServer.listen(8443);
