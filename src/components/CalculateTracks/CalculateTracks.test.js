import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CalculateTraks from './index';

configure({ adapter: new Adapter() });

test('Test CalculateTraks Component button', () => {
  const component = mount(
  	<CalculateTraks />
	);
	expect(component.find('button').length).toEqual(1);
});