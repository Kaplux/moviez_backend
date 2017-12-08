import ApolloClient from "apollo-client-preset";
import gql from "graphql-tag";

const client = new ApolloClient();

export function loadNewAndOpenSessions(email) {
  return dispatch => {
    dispatch({
      type: "LOAD_NEW_AND_OPEN_SESSIONS_REQUEST"
    });

    return client
      .query({
        query: gql`
          query myuser($email: String!) {
            user(email: $email) {
              groups {
                newSessions: sessions(status: NEW) {
                  id
                  name
                  movies {
                    id
                    name
                    imdbURL
                  }
                }
                openSessions: sessions(status: OPEN) {
                  id
                  name
                  movies {
                    id
                    name
                    imdbURL
                  }
                }
              }
            }
          }
        `,
        variables: {
          email: email
        }
      })
      .then(response => {
        console.log(response);
        dispatch(
          loadNewAndOpenSessionsSuccess(
            response.data.user.groups[0].newSessions,
            response.data.user.groups[0].openSessions
          )
        );
      })
      .catch(e => {
        console.log(e);
        dispatch(loadNewAndOpenSessionsFailure());
      });
  };
}

export function loadNewAndOpenSessionsSuccess(newSessions, openSessions) {
  return {
    type: "LOAD_NEW_AND_OPEN_SESSIONS_SUCCESS",
    newSessions,
    openSessions
  };
}

export function loadNewAndOpenSessionsFailure() {
  return {
    type: "LOAD_NEW_AND_OPEN_SESSIONS_FAILURE"
  };
}

export function createSession(sessionName) {
  return dispatch => {
    dispatch({
      type: "CREATE_NEW_SESSION_REQUEST"
    });

    return client.mutate({
      mutation: gql`
        mutation createSession($sessionName: String!) {
          addSession(groupId: 1, name: $sessionName) {
            id
          }
        }
      `,
      variables: {
        sessionName: sessionName
      }
    });
  };
}
