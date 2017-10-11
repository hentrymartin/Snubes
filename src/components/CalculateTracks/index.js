import React from 'react';
import PropTypes from 'prop-types';
import './CalculateTracks.scss';

const CalculateTracks = (props) => {
	return (
		<div className="calc-tracks">
			<button onClick={props.onCalculateTracks}>Calculate Tracks</button>
		</div>
	);
};

CalculateTracks.defaultProps = {
	onCalculateTracks: () => {},
};

CalculateTracks.defaultProps = {
	onCalculateTracks: PropTypes.func,
};

export default CalculateTracks;
