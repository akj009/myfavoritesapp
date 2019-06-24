import React from 'react';
import { shallow } from 'enzyme';
import FavList from '../FavList';

describe('FavList', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<FavList />));

    it('should render a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('should contain a table', () => {
        expect(wrapper.find('table').length).toEqual(1);
    });

    it('should render a single row', () => {
        wrapper.setProps({elementList: [{name: 'Avatar'}]});
        expect(wrapper.find('tbody').find('tr').length).toEqual(1);
    });

    it('should render loading row', () => {
        expect(wrapper.find('tbody').find('tr').length).toEqual(1);
    });
});