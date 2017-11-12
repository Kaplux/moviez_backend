import React from 'react';
import { connect } from 'react-redux';

class Home extends React.PureComponent {

    render() {

        return (
            <div>
                home {this.props.email}
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
