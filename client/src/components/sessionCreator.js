import React from "react";
import { Form, Segment, Header, Button, Grid } from "semantic-ui-react";
import * as actionCreators from "../actions/sessionActionCreator";
import { connect } from "react-redux";

class SessionCreator extends React.PureComponent {
  render() {
    return (
      <div>
        <Grid
          padded
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 650 }}>
            <Header as="h2" primary textAlign="center">
              New Session
            </Header>
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  placeholder="Session name"
                  required
                  onChange={e => this.setState({ sessionName: e.target.value })}
                />
                <Button
                  primary
                  fluid
                  size="large"
                  onClick={() =>
                    this.props.createSession(this.state.sessionName)
                  }
                >
                  Create
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export { SessionCreator };
export const SessionCreatorContainer = connect(null, actionCreators)(
  SessionCreator
);
