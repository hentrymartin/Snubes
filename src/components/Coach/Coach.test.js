import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Coach from './index';
import { Constants } from './../../constants';
import { Images } from './../../Images';

configure({ adapter: new Adapter() });

test('Test Coach Component image based on type', () => {
	const coach = {
		type: Constants.COACH_TYPES.LOCOMOTIVE,
	};
  const component = mount(
  	<Coach
    	coach={coach}
  	/>
	);
	expect(component.find('img').prop('src')).toEqual(Images.LOCOMOTIVE);
});