import React from 'react';
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

export default CalculateTracks;
