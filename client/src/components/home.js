import React from 'react';
import { connect } from 'react-redux';
import { CurrentSessionContainer } from './session.js';
import * as actionCreators from '../actions/sessionActionCreator.js';

class Home extends React.PureComponent {

    render() {

        return (
            <div>
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
