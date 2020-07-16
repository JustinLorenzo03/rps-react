import React from 'react';
import { shallow } from 'enzyme';
import UserHome from './UserHome';
describe('UserHome Component', () => {
    it('only has 1 h5 in UserHome', () => {
        const wrapper = shallow(<UserHome />);
        const text = wrapper.find('h5');
        expect(text).toHaveLength(1);
    })
    it('check if UserHome message is visible', () => {
        const wrapper = shallow(<UserHome />);
        const text = wrapper.find('h5').text();
        expect(text).toEqual("Welcome User");
    })
    it('logout button is clicked',() => {
        const wrapper = shallow(<UserHome />);
        const LogoutButton = wrapper.find('LogoutButton');
        LogoutButton.simulate('click');
    })
    it('Rules button is clicked',() => {
        const wrapper = shallow(<UserHome />);
        const RulesButton = wrapper.find('RulesButton');
        RulesButton.simulate('click');
    })
})