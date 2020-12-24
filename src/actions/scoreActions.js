import { FETCH_SCORE, INCREMENT_SCORE, DECREMENT_SCORE } from './types';


export const fetchScore = () => dispatch => {
    dispatch({
        type: FETCH_SCORE
    })
};


export const incrementScore = () => dispatch => {
    dispatch({
        type: INCREMENT_SCORE
    })
};


export const decrementScore = () => dispatch => {
    dispatch({
        type: DECREMENT_SCORE
    })
};