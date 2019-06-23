import * as types from '../config/types';

export const fetchList = () => {
    return dispatch => {
        dispatch(fetchListRequest());
        return fetch('/list/all')
            .then(res => res.json())
            .then(body => dispatch(fetchListSuccess(body)))
            .catch(ex => dispatch(fetchListFailure(ex)));
    };
};

const fetchListRequest = () => ({
    type: types.FETCH_LIST_REQUEST
});

const fetchListSuccess = (body) => {
    return {
        type: types.FETCH_LIST_SUCCESS,
        body
    };
};

const fetchListFailure = (ex) => {
    return {
        type: types.FETCH_LIST_FAILURE,
        ex
    }
};
