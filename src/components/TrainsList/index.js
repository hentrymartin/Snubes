import React from 'react';
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
};

export default TrainsList;
