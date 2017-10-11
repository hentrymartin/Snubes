import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TrainListItem from './index';
import { Constants } from './../../constants';

configure({ adapter: new Adapter() });

test('Test Train number based on train', () => {
	const train = {
		trainId: 1,
		coaches: [],
	};

	const onTimingChange = () => {};
  const component = mount(
  	<TrainListItem  train={train} onTimingChange={onTimingChange}/>
	);
	expect(component.find('.train-list-item__train-name').text()).toEqual('Train number : 1 (Add more coaches here)');
});

test('Test Train coaches', () => {
	const train = {
		trainId: 1,
		coaches: [
			{
				type: Constants.COACH_TYPES.LOCOMOTIVE
			},
			{
				type: Constants.COACH_TYPES.CARRIAGE,
			},
		],
	};

	const onTimingChange = () => {};
  const component = mount(
  	<TrainListItem  train={train} onTimingChange={onTimingChange}/>
	);
	expect(component.find('.coach').length).toEqual(2);
});