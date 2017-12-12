const _ = require("lodash");
const jwt = require("jsonwebtoken");
const secret = "shhhh";

var users = [
  {
    id: 1,
    email: "test@test.com",
    password: "test"
  },
  {
    id: 2,
    email: "user2@test.com",
    password: "test"
  }
];
function auth(email, password) {
  var user = users[_.findIndex(users, { email: email })];

  if (user && user.password === password) {
    var payload = { id: user.id, email: user.email };
    var token = jwt.sign(payload, secret);
    return token;
  }
  return null;
}

function validateToken(token) {
  console.log("token: " + token);
  return jwt.verify(token, secret);
}

module.exports = { auth, validateToken };
