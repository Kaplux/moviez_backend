
import { Map } from 'immutable';

export default function session(state = Map(), action) {
    switch (action.type) {
        case 'LOAD_NEW_AND_OPEN_SESSIONS_REQUEST':
            return state.set('loading', true);
        case 'LOAD_NEW_AND_OPEN_SESSIONS_SUCCESS':
            return setNewAndOpenSessions(state, action.newSessions, action.openSessions);
        case 'LOAD_NEW_AND_OPEN_SESSIONS_FAILURE':
            return state.merge({ 'loading': false });
        default:
            return state

    }

    function setNewAndOpenSessions(state, newSessions, openSessions) {
        return state.merge({ 'loading': false, 'newSessions': newSessions, 'openSessions': openSessions });
    }

}
