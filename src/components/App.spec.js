import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import FavList from './FavList';

describe('App', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<App />));

    it('should render a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('should render the FavList component', () => {
        expect(wrapper.containsMatchingElement(<FavList />)).toEqual(true);
    });
});