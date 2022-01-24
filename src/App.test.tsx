import { expect } from 'chai';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { mount } from 'enzyme';
import React from 'react';
import 'jsdom-global/register';
import App from './App';


Enzyme.configure({ adapter: new Adapter() });


describe('<Foo />', () => {
    it('calls componentDidMount', () => {
      const wrapper = mount(<App />);
      expect(wrapper.find('h1').text()).to.equal('Hello World')
    });
  });