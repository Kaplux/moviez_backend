import React from 'react';
import { connect } from 'react-redux';
import { CurrentSessionContainer } from './session.js';
import * as actionCreators from '../actions/sessionActionCreator.js';
import { Button, Icon, Divider } from 'semantic-ui-react';


class Home extends React.PureComponent {

    render() {

        return (
            <div>
                <Divider hidden />
                <Button.Group >
                    <Button size="big" positive><Icon name="add circle" />Create a new session</Button>
                    <Button.Or />
                    <Button size="big"><Icon name="history" />View past sessions</Button>
                </Button.Group>
                <Divider hidden />
                <CurrentSessionContainer />

            </div>

        );

    }

    componentDidMount() {
        this.props.loadCurrentSession(this.props.email);
    }


}

function mapStateToProps(state) {
    return {
        email: state.login.get('email'),
    };
}




export { Home };
export const HomeContainer = connect(mapStateToProps, actionCreators)(Home);
