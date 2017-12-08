import React from "react";
import { connect } from "react-redux";
import { OpenSessionsContainer, NewSessionsContainer } from "./sessions.js";
import { Button, Icon, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Home extends React.PureComponent {
  render() {
    return (
      <div>
        <Divider hidden />
        <Button.Group>
          <Link to="/createSession">
            <Button size="big" positive>
              <Icon name="add circle" />Create a new session
            </Button>
          </Link>
          <Button.Or />
          <Button size="big">
            <Icon name="history" />View past sessions
          </Button>
        </Button.Group>
        <Divider hidden />
        <OpenSessionsContainer />
        <Divider hidden />
        <NewSessionsContainer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // email: state.login.get('email'),
    email: "test@test.com"
  };
}

export { Home };
export const HomeContainer = connect(mapStateToProps)(Home);
