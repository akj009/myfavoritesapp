import {applyMiddleware, createStore} from 'redux';

import middleWares from './middlewares';
import rootReducer from '../reducers';

let store = applyMiddleware(...middleWares)(createStore);

const configureStore = (initialState) => {
    return store(rootReducer, initialState);
};

export default configureStore();
