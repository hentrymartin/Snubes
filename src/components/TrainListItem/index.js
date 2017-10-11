import React from 'react';
import Coach from './../Coach';
import TimePicker from 'rc-time-picker';
import './TrainListItem.scss';

const TrainListItem = (props) => {
	return (
		<div className="train-list-item">
			<div className="train-list-item__train-name">
				Train number : {props.train.trainId} (Add more coaches here)
			</div>
			<div className="train-list-item__wrapper">
				<div className="train-list-item__coaches">
					{
						props.train.coaches.map((coach, index) => <Coach key={index} coach={coach}/>)
					}
				</div>
				<div className="train-list-item__duration">
					<TimePicker
						name="arrival"
						placeholder="Arrival Timing"
						onChange={props.onTimingChange.bind(this, 'arrival', props.train)}
						value={props.train.arrival}
					/>
					<TimePicker
						name="departure"
						placeholder="Departure Timing"
						onChange={props.onTimingChange.bind(this, 'departure', props.train)}
						value={props.train.departure}
					/>
				</div>
			</div>
		</div>
	);
};

export default TrainListItem;