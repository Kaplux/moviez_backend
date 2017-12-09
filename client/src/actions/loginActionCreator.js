import fetch from "isomorphic-fetch";
import { loadNewAndOpenSessions } from "./sessionActionCreator";

export function login(email, password) {
  console.log("login attempt");
  return dispatch => {
    dispatch({
      type: "LOGIN_REQUEST",
      email,
      password
    });
    var searchParam = new URLSearchParams();
    searchParam.set("email", email);
    searchParam.set("password", password);
    return fetch("/api/login", {
      method: "POST",
      body: searchParam
    })
      .then(response => {
        console.log(response);
        if (response.ok) {
          response.json().then(function(data) {
            const token = data.token;
            dispatch(loadNewAndOpenSessions(email));
            dispatch(loginSuccess(email, token));
          });
        } else {
          dispatch(loginFailure());
        }
      })
      .catch(e => {
        console.log(e);
        dispatch(loginFailure());
      });
  };
}

export function loginSuccess(email, token) {
  console.log("login success");
  persistUserInfos(email, token);
  return {
    type: "LOGIN_REQUEST_SUCCESS",
    email,
    token
  };
}

export function loginFailure() {
  console.log("login failure");
  return {
    type: "LOGIN_REQUEST_FAILURE"
  };
}

function persistUserInfos(email, token) {
  localStorage.setItem(
    "userInfos",
    JSON.stringify({ email: email, token: token })
  );
}
