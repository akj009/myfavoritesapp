import * as types from '../config/types';

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
                        name: item
                    };
                }),
                ...state.list
            ];
    }
    return state;
};