import React from 'react';
import Element from './../Element';
import { Images } from './../../Images';
import { Constants } from './../../constants';
import './Pallete.scss';

const Pallete = () => {
	return (
		<section className="pallete">
			<Element
				type={Constants.COACH_TYPES.CARRIAGE}
				source={Images.CARRIAGE}
			/>
			<Element
				type={Constants.COACH_TYPES.LOCOMOTIVE}
				source={Images.LOCOMOTIVE}
			/>
		</section>
	);
};

export default Pallete;
