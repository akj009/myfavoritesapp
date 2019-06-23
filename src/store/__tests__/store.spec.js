import * as actions from '../actions/listActions';
import * as types from '../config/types';
import mockStore from './configureMockStore';
import fetchMock from 'fetch-mock';

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