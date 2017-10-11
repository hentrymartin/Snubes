import React from 'react';
import { Constants } from './../../constants';
import { Images } from './../../Images';
import PropTypes from 'prop-types';
import './Coach.scss';

const Coach = (props) => {
	const type = props.coach.type;
	const imageSource = type === Constants.COACH_TYPES.LOCOMOTIVE ? Images.LOCOMOTIVE : Images.CARRIAGE;
	return (
		<div className="coach">
			{
				type === Constants.COACH_TYPES.CARRIAGE &&
				<div className="coach__line"></div>
			}
			<div className="coach__image-wrapper">
				<img src={imageSource}/>
			</div>
		</div>
	);
};

Coach.defaultProps = {
	coach: {},
};

Coach.proptypes = {
	coach: PropTypes.object,
};

export default Coach;
