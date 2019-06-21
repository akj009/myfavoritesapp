import React from 'react';
import { shallow } from 'enzyme';
import FavList from './index';

describe('FavList', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<FavList />));

    it('should render a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });
});