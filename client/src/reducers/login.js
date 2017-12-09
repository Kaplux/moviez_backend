import { Map } from "immutable";

export default function login(state = Map(), action) {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return state.set("loginInProgress", true);
    case "LOGIN_REQUEST_SUCCESS":
      return state.merge({
        loginInProgress: false,
        lastLoginFailed: false,
        loggedIn: true,
        email: action.email,
        token: action.token
      });
    case "LOGIN_REQUEST_FAILURE":
      return state.merge({ loginInProgress: false, lastLoginFailed: true });
    default:
      return state;
  }
}
