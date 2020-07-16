import React from 'react';
import PVE from './PVE';
import { shallow } from 'enzyme';

describe('the name of player', () => {
    it('knows the word player is sent out', () => {
        const wrapper = shallow(<PVE />);
        const text = wrapper.find('div.player-wins').text();
        expect(text).toEqual('Player<Player />');
    })
})
describe('the player name', () => {
    it('knows player name is true', () => {
        const wrapper = shallow(<PVE />);
        const text = wrapper.find('div.player-wins');
        expect(text.exists()).toBe(true);
    })
})
describe('the starbar for player', () => {
    it('knows it is there', () => {
        const wrapper = shallow(<PVE />);
        const text = wrapper.find('div.starbar-player');
        expect(text).toEqual({});   
    })
})
describe('the button div', () => {
    it('knows the buttons is true', () => {
        const wrapper = shallow(<PVE />);
        const text = wrapper.find('div.player-choices');
        expect(text.exists()).toBe(true);
    })
})
describe('the rock button', () => {
    it('knows the rock button exists', () => {
        const wrapper = shallow(<PVE />);
        const text = wrapper.find('div.button.rock');
        expect(text.exists()).toBe(false);
    })
})
describe('the paper button', () => {
    it('knows the paper button exists', () => { 

    })
})
describe('the scissor button', () => {
    it('knows the scissor button exists', () => {
    
    })
})
describe('the computer name', () => {
    it('knows this is the computer', () => {
    const wrapper = shallow(<PVE />);
    const text = wrapper.find('div.cpu-wins').text();
    expect(text).toEqual('Computer<Player />');
    })
})
describe('the computer name', () => {
    it('knows the computer name is real', () => {
        const wrapper = shallow(<PVE />);
        const text = wrapper.find('div.cpu-wins');
        expect(text.exists()).toBe(true);
    })
})
describe('the computer starbar', () => {
    it('knows the computer starbar is present', () => {
    const wrapper = shallow(<PVE />);
    const text = wrapper.find('div.starbar-cpu');
    expect(text).toEqual({});
    })
})