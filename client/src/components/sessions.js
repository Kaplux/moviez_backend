
import React from 'react';
import { connect } from 'react-redux';
import { Session } from './session.js';


class Sessions extends React.PureComponent {

    render() {
        let sessions = this.props.sessions || [];
        return (
            <div>
                {sessions.map((session) =>
                    <Session key={session.get('id')} movies={session.get('movies')} name={session.get('name')} />
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
