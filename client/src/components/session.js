import React from 'react';
import { connect } from 'react-redux';

class Session extends React.PureComponent {

    render() {

        return (
            <div>
                Current Session : {this.props.name}
            </div>
        );

    }

}


function mapStateToProps(state) {
    return {
        name: state.currentSession.get('name'),
    };
}

export { Session };
export const CurrentSessionContainer = connect(mapStateToProps)(Session);
