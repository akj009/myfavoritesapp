import React from 'react';
import { shallow } from 'enzyme';
import {RandomizeButton} from "../RandomizeButton";

describe('RatingForm', () => {

    let wrapper;
    // const mockFn = jest.fn();
    beforeEach(() => wrapper = shallow(<RandomizeButton/>));

    it('should render label for dropdown', () => {
        expect(wrapper.find('h4').length).toEqual(1);
    });

    it('should render buttons for starting and stopping',() => {
        expect(wrapper.find('button').length).toEqual(2);
    });
});