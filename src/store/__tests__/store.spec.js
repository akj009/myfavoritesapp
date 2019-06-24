import * as actions from '../actions/listActions';
import * as types from '../config/types';
import mockStore from '../mock/configureMockStore';
import fetchMock from 'fetch-mock';
import {initialState, listReducer} from "../reducers/listReducer";

describe('list favorite actions', () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            list: []
        })
    });

    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
    });

    it('has an action to list todo', () => {
        const favList = ["Inception", "Avengers", "Avatar", "Oceans"];
        fetchMock
            .getOnce('/list/all/movies', {
                body: {
                    list: favList
                }, headers: {
                    'content-type': 'application/json'
                }
            });

        const expectedAction = [
            {
                type: types.FETCH_LIST_REQUEST
            },
            {
                type: types.FETCH_LIST_SUCCESS,
                body: {
                    list: favList
                }
            }
        ];

        return store.dispatch(actions.fetchList()).then(() => {
            expect(store.getActions()).toEqual(expectedAction)
        });
    });
});

describe('reducer favorites list', () => {
    it('should provide initial list state', () => {
        expect(listReducer(undefined, {})).toEqual(initialState);
    });
    it('should handle FETCH_LISTS', () => {
       expect(listReducer(undefined, {
           type: types.FETCH_LIST_SUCCESS,
           body: {
               list: [
               "Avengers",
               "Avatar",
               "Oceans",
               "Godfather"
           ]}
       })).toEqual([
           {
               id: 0,
               name: "Avengers",
               score: 0
           },
           {
               id: 1,
               name: "Avatar",
               score: 0
           },
           {
               id: 2,
               name: "Oceans",
               score: 0
           },
           {
               id: 3,
               name: "Godfather",
               score: 0
           },
           ...initialState.list
       ]);
   });
});

describe('rating actions', () => {
    let store;

    beforeEach(() => {
        store = mockStore([
            {name: 'Avengers', id: 0, score: 0},
            {name: 'Endgame', id: 1, score: 0},
            {name: 'Avatar', id: 2, score: 0}
        ])
    });


    it('should have action ADD RATING', () => {
        const mockRating = {
            name: 'Avengers',
            score: 5
        };
        const expectedActions = [{
            type: types.ADD_RATING,
            rating: mockRating
        }, {
            type: types.SORT_LIST_ON_RATINGS
        }];
        store.dispatch(actions.addRating(mockRating));
        expect(store.getActions()).toEqual(expectedActions);
    });
    it('should change ratings on SUBMIT RATING', () => {});
});

describe('reducers rating items', () => {
    it('should add rating to existing item', () => {
        expect(listReducer([{
            id: 0,
            name: "Avengers",
            score: 0
        },
            {
                id: 1,
                name: "Avatar",
                score: 0
            },
            {
                id: 2,
                name: "Oceans",
                score: 0
            },
            {
                id: 3,
                name: "Godfather",
                score: 0
            }], {
            type: types.ADD_RATING,
            rating: {
                name: "Oceans",
                score: 5
            }
        })).toEqual([
            {
                id: 0,
                name: "Avengers",
                score: 0
            },
            {
                id: 1,
                name: "Avatar",
                score: 0
            },
            {
                id: 3,
                name: "Godfather",
                score: 0
            },
            {
                id: 2,
                name: "Oceans",
                score: 5
            }
        ])
    });
    it('should sort existing items based on rating', () => {
        expect(listReducer([{
            id: 0,
            name: "Avengers",
            score: 4
        },
            {
                id: 1,
                name: "Avatar",
                score: 2
            },
            {
                id: 2,
                name: "Oceans",
                score: 5
            },
            {
                id: 3,
                name: "Godfather",
                score: 1
            }], {
            type: types.SORT_LIST_ON_RATINGS
        })).toEqual([
            {
                id: 2,
                name: "Oceans",
                score: 5
            },
            {
                id: 0,
                name: "Avengers",
                score: 4
            },
            {
                id: 1,
                name: "Avatar",
                score: 2
            },
            {
                id: 3,
                name: "Godfather",
                score: 1
            },
        ])
    });
});