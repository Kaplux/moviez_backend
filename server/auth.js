const _ = require("lodash");
const jwt = require("jsonwebtoken");

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
