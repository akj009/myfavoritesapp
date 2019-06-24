import React from 'react';
import { shallow } from 'enzyme';
import {App} from '../App';
import FavList from '../FavList';
import RatingForm from "../RatingForm";
import RandomizeButton from "../RandomizeButton";

describe('App', () => {
    let wrapper;
    const mockFetchList = jest.fn();
    beforeEach(() => wrapper = shallow(<App fetchList={mockFetchList}/>));

    it('should render a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('should render the FavList component', () => {
        expect(wrapper.containsMatchingElement(<FavList />)).toEqual(true);
    });

    it('should render the rating component', () => {
        expect(wrapper.containsMatchingElement(<RatingForm />)).toEqual(true);
    });

    it('should render the RandomRating button', () => {
        expect(wrapper.containsMatchingElement(<RandomizeButton />)).toEqual(true);
    });
});