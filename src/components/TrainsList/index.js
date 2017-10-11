import React from 'react';
import PropTypes from 'prop-types';
import TrainListItem from './../TrainListItem';
import DropTargetWrapper from './../DropTarget';
import './TrainsList.scss';

const TrainsList = (props) => {
	return (
			<div className="trains-list">
				{
					props.trains.map((train, index) => {
						return (
							<DropTargetWrapper
								key={index}
								targetDropped={props.addCoach.bind(this, train)}
							>
								<TrainListItem
									train={train}
									onTimingChange={props.onTimingChange}
								/>
							</DropTargetWrapper>
						);
					})
				}
			</div>
	);
};

TrainsList.defaultProps = {
	trains: [],
	addCoach: () => {},
	onTimingChange: () => {},
};

TrainsList.propTypes = {
	trains: PropTypes.array,
	addCoach: PropTypes.func,
	onTimingChange: PropTypes.func,
};

export default TrainsList;
