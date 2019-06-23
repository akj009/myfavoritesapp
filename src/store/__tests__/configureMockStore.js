import configureMockStore from 'redux-mock-store';

import middlewares from '../config/middlewares';

const mockStore = configureMockStore(middlewares);

export default mockStore;