import * as types from '../config/types';

export const fetchList = () => {
    return (dispatch) => {
        dispatch(fetchListRequest());
        return fetch('/list/all/movies')
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

export const addRating = (rating) => {
    return (dispatch) => {
        dispatch(updateRating(rating));
        dispatch(sortList());
    }
};

const updateRating = (rating) => {
    return {
        type: types.ADD_RATING,
        rating
    };
};

const sortList = () => {
    return {
        type: types.SORT_LIST_ON_RATINGS
    };
};

const updateRatingByIdx = (ratingWithId) => {
    return {
        type : types.UPDATE_RATING_BY_ID,
        ratingWithId
    }
};

export const updateRatingByIndex = (ratingWithId) => {
    return (dispatch) => {
        dispatch(updateRatingByIdx(ratingWithId));
        dispatch(sortList());
    }
};
