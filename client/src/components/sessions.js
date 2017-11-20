
import React from 'react';
import { connect } from 'react-redux';
import { Session } from './session.js';


class Sessions extends React.PureComponent {

    render() {
        let sessions = this.props.sessions || [];
        console.log("render");
        console.log(sessions);
        return (
            <div>
                {sessions.map((session) =>
                    <Session movies={session.get('movies')} />
                )}
            </div>
        );

    }

}


function mapNewSessionsStateToProps(state) {
    return {
        sessions: state.session.get('newSessions')
    };
}


function mapOpenSessionsStateToProps(state) {
    return {
        sessions: state.session.get('openSessions')
    };
}


export { Sessions };
export const NewSessionsContainer = connect(mapNewSessionsStateToProps)(Sessions);
export const OpenSessionsContainer = connect(mapOpenSessionsStateToProps)(Sessions);
