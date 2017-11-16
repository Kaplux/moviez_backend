const _ = require("lodash");
const jwt = require("jsonwebtoken");

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
    var payload = { id: user.id };
    var token = jwt.sign(payload, "shhhh");
    return token;
  }
  return null;
}

module.exports = auth;
