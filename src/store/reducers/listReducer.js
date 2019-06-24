import * as types from '../config/types';
import scoreComparator from "../config/ScoreComparator";

export const initialState = {
    list: []
};

export const listReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.FETCH_LIST_SUCCESS:
            return [
                ...action.body.list.map((item, index) => {
                    return {
                        id: index,
                        name: item,
                        score: 0
                    };
                }),
                ...state.list
            ];
        case types.ADD_RATING:
            let otherElements = [];
            let mutableElement = {};
            let {rating} = action;
            for (let stateKey in state) {
                if(state[stateKey].name === rating.name) {
                    mutableElement = Object.assign({}, state[stateKey], {score: rating.score});
                } else {
                    otherElements.push(Object.assign({}, state[stateKey]));
                }
            }
            return [mutableElement, ...otherElements];
        case types.SORT_LIST_ON_RATINGS:
            let sortedState = [...state];
            return sortedState.sort(scoreComparator);
        default: return state;
    }
};
