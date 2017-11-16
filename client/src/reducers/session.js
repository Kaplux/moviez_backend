
import { Map } from 'immutable';

export default function login(state = Map(), action) {
    switch (action.type) {
        case 'LOAD_CURRENT_SESSION_REQUEST':
            return state.set('loading', true);
        case 'LOAD_CURRENT_SESSION_SUCCESS':
            return state.merge({ 'loading': false, 'currentSession': action.currentSession });
        case 'LOAD_CURRENT_SESSION_FAILURE':
            return state.merge({ 'loading': false });
        default:
            return state

    }
}