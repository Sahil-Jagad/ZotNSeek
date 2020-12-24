import { FETCH_SCORE, INCREMENT_SCORE, DECREMENT_SCORE } from '../actions/types';


export default function scoreReducer(state = 0, action) {
    switch (action.type) {
        case INCREMENT_SCORE:
            return state + 1;
        case DECREMENT_SCORE:
            return (state > 0) ? state - 1 : state;
        case FETCH_SCORE:
        default:
            return state;
    }
}
