import { initialState } from '../store/initialState';

export const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'CHENGE_DATA': {
            return {
                ...state,
                data: action.payload
            }
        }
        case 'CHENGE_COUNT': {
            return {
                ...state,
                count: state.count + action.payload
            }
        }
        case 'CHENGE_WINNER': {
            return {
                ...state,
                countWinner: action.payload
            }
        }
        case 'CHENGE_MOVE': {
            return {
                ...state,
                move: action.payload
            }
        }
        case 'RESSET_GAME': {
            return {
                move: 'X',
                countWinner: null,
                count: 0,
                winnerGame: true
            }
        }   
        case 'CHENGE_WINNER_GAME': {
            return {
                ...state,
                winnerGame: action.payload
            }
        }      
        default: 
        return state;
    }
};

