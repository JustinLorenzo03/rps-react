import React from 'react';
import Login from './Login';
import { shallow } from 'enzyme';
import EnterButton from '../ButtonContainer/EnterButton';
import CancelButton from '../ButtonContainer/CancelButton';

describe('Testing the Login function with enzyme', () => {
    it('knows h1 tag', () => {
        const wrapper = shallow(<Login />);
        const text = wrapper.find('h1');
        expect(text).toHaveLength(1);
    })
})
describe('working the h1 tag', () => {
    it('knows to print out Login In', () => {
        const wrapper = shallow(<Login />);
        const text = wrapper.find('h1').text();
        expect(text).toEqual("Log In");
    })
})
describe('username input function working', () => {
    it('knows this is for username', () => {
        const wrapper = shallow(<Login />);
        const text = wrapper.find('inputbox');
        expect(text).toEqual({});
    })
})
describe('password input text', () => {
    it('knows this is the password input', () => {
        const wrapper = shallow(<Login />);
        const text = wrapper.find('inputbox');
        expect(text).toEqual({});
    })
})
describe('working the enter button', () => {
    it('takes us to userhome', () => {
        const wrapper = shallow(<Login />);
        const enterButton = wrapper.find('EnterButton');
        expect(enterButton.exists()).toBe(true);
    })
})
describe('working the cancel button', () => {
    it('takes us to welcome page', () => {
        const wrapper = shallow(<Login />);
        const cancelButton = wrapper.find('CancelButton');
        expect(cancelButton.exists()).toBe(true);
    })
})
describe('working the forgot password button', () => {
    it('does nothing when clicked', () => {
        const wrapper = shallow(<Login />);
        const passwordButton = wrapper.find('btn');
        expect(passwordButton.exists()).toBe(false);
    })
})