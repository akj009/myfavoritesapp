import React from 'react';
import { shallow } from 'enzyme';
import {RatingForm} from '../RatingForm';

describe('RatingForm', () => {

    let wrapper;
    const mockFn = jest.fn();
    beforeEach(() => wrapper = shallow(<RatingForm submitRating={mockFn}/>));

    it('should render label for dropdown', () => {
        expect(wrapper.find('label').length).toEqual(1);
    });
    it('should render dropdown for listing items', () => {
        expect(wrapper.find('select').length).toEqual(2);
    });
    it('should render button for submitting rating ',() => {
        expect(wrapper.find('button').length).toEqual(1);
    });
});