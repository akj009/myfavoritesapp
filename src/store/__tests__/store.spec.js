import * as actions from '../actions/listActions';
import * as types from '../config/types';
import mockStore from './configureMockStore';
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
            .getOnce('/list/all', {
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
               name: "Avengers"
           },
           {
               id: 1,
               name: "Avatar"
           },
           {
               id: 2,
               name: "Oceans"
           },
           {
               id: 3,
               name: "Godfather"
           },
           ...initialState.list
       ]);
   });
});