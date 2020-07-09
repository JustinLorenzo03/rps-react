import React from 'react';
import UserHome from './UserHome';
import { shallow } from 'enzyme';

describe('Testing the UserHome function with enzyme', () => {
    it('knows h1 tag', () => {
        const wrapper = shallow(<UserHome />);
        const text = wrapper.find('h5');
        expect(text).toHaveLength(1);
    })
})
describe('working the h1 tag', () => {
    it('knows to print out Login In', () => {
        const wrapper = shallow(<UserHome />);
        const text = wrapper.find('h5').text();
        expect(text).toEqual("Welcome User");
    })
})
