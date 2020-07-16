import React from 'react';
import { shallow } from 'enzyme';
import Signup from './Signup';

describe('Header test', () =>{
    it('Checks to see if the H1 is accurate', () =>{
        const wrapper = shallow(<Signup />);
        const text = wrapper.find('h1').text();
       expect(text).toEqual('Signup');
    })
})
describe('First Name Test', () =>{
    it('checks for text in the first name box', () =>{
        const wrapper = shallow(<Signup />);
        const firstField = wrapper.find('input.Firstname');
       expect(firstField).toHaveLength(0);
    })
})
describe('Last Name Test', () =>{
    it('Checks for text in the last name box', () =>{
        const wrapper = shallow(<Signup />);
        const lastField = wrapper.find('input.Lastname')
       expect(lastField).toHaveLength(0);
    })
})
describe('Email Test', () =>{
    it('Checks for text in the email box', () =>{
        const wrapper = shallow(<Signup />);
        const emailField = wrapper.find('input.email')
       expect(emailField).toHaveLength(0);
    })

})
describe('Username Test', () =>{
    it('Checks for text in the username box', () =>{
        const wrapper = shallow(<Signup />);
        const userField = wrapper.find('input.username');
       expect(userField).toHaveLength(0);
    })
})
describe('Password Test', () =>{
    it('Checks for text in the password box', () =>{
        const wrapper = shallow(<Signup />);
        const passField = wrapper.find('input.password');
        expect(passField).toHaveLength(0);
    })
})
describe('Confirm Password Test', () =>{
    it('Checks for text in the password box', () =>{
        const wrapper = shallow(<Signup />);
        const passwordfield = wrapper.find('input.confirm');
        expect(passwordfield).toHaveLength(0);
    })
})