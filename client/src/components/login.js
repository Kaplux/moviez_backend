import React from 'react';
import { Form, Segment, Grid, Header, Message, Dimmer, Loader } from 'semantic-ui-react';
import * as actionCreators from '../actions/loginActionCreator';
import { connect } from 'react-redux';

class Login extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {};
    }

    handleEmailChange(e) {
        this.setState({ email: e.target.value });
    }

    handlePasswordChange(e) {
        this.setState({ password: e.target.value });
    }

    render() {
        const lastLoginInfos = this.props.lastLoginFailed ? <Message negative>Invalid email or password</Message> : "";
        return (
            <div>
                <Dimmer active={this.props.loginInProgress}>
                    <Loader />
                </Dimmer>
                <Grid
                    textAlign='center'
                    style={{ height: '100%' }}
                    verticalAlign='middle'
                >
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='teal' textAlign='center'>
                            {' '}Log-in to your account
                        </Header>
                        {lastLoginInfos}
                        <Form size='large'>
                            <Segment raised>
                                <Form.Input placeholder='Email' onChange={this.handleEmailChange.bind(this)} />
                                <Form.Input placeholder='Password' type="password" onChange={this.handlePasswordChange.bind(this)} />
                                <Form.Button color='teal' onClick={() => this.props.login(this.state.email, this.state.password)}>Login</Form.Button>
                            </Segment>
                        </Form>
                        <Message>
                            New to us? <a href='#'>Sign Up</a>
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }

}


function mapStateToProps(state) {
    return {
        lastLoginFailed: state.login.get('lastLoginFailed'),
        loginInProgress: state.login.get('loginInProgress')
    };
}




export { Login };
export const LoginContainer = connect(mapStateToProps, actionCreators)(Login);
