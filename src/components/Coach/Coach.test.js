import React from 'react';
import {shallow} from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import Coach from './index';
import { Constants } from './../../constants';

configure({ adapter: new Adapter() });

test('Coach component based on type', () => {
	const coach = {
		type: Constants.COACH_TYPES.LOCOMOTIVE,
	};
  const component = shallow(
  	<Coach
    	coach={coach}
  	/>
	);
  let tree = component.toJSON();
  console.log(tree.find('img'));
});