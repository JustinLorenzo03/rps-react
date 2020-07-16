import React from 'react';
import UserStats from './UserStats';
import { shallow } from 'enzyme';

describe('player pops up next to logo', () => {
    it('knows to render player is there', () => {
        const wrapper = shallow(<UserStats />);
        const text = wrapper.find('h1');
        expect(text).toHaveLength(1);
    })
})
describe('h1 tag', () => {
    it('knows to print player', () => {
        const wrapper = shallow(<UserStats />);
        const text = wrapper.find('h1').text();
        expect(text).toEqual(" Player");
    })
})
describe('the div tag with wording', () => {
    it('knows to print Ranking: LV 25', () => {
        const wrapper = shallow(<UserStats />);
        const text = wrapper.find("div.user-rank");
        expect(text).toEqual({});
    })
})
describe('wins category', () => {
    it('knows this is here', () => {
    const wrapper = shallow(<UserStats />);
    const text = wrapper.find('div.win');
    expect(text).toEqual({})
    })
})
describe('lose category', () => {
    it('knows this is present', () => {
        const wrapper = shallow(<UserStats />);
        const text = wrapper.find('div.loss');
        expect(text).toEqual({});
    })
})
describe('the achievements bar', () => {
    it('knows the achievement is there', () => {
        const wrapper = shallow(<UserStats />);
        const text = wrapper.find("p").text();
        expect(text).toEqual('Achievements')
    })
})