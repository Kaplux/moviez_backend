import { loadNewAndOpenSessions } from "./sessionActionCreator";
import { push } from "react-router-redux";

export function init() {
  const userInfos = JSON.parse(localStorage.getItem("userInfos"));
  if (userInfos !== null) {
    return loadNewAndOpenSessions(userInfos.email);
  } else {
    return dispatch => dispatch(push("/login"));
  }
}
