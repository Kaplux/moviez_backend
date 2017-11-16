import React from 'react';
import { connect } from 'react-redux';
import { CurrentSessionContainer } from './session.js'
class Home extends React.PureComponent {

    render() {

        return (
            <div>
                <CurrentSessionContainer />
            </div>
        );

    }

}


function mapStateToProps(state) {
    return {
        email: state.login.get('email'),
    };
}




export { Home };
export const HomeContainer = connect(mapStateToProps)(Home);
