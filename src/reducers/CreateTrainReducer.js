import * as types from './../actions/types';
import { Constants } from './../constants';
import { calculateTracks } from './../utils';

function validationBeforeAddingCoach(train, type) {
	if (type === Constants.COACH_TYPES.CARRIAGE) return true;

	for (let loop = 0, len = train.coaches.length; loop < len; loop++) {
		const coach = train.coaches[loop];
		if (coach.type === type) {
			alert('Cannot add two locomotives to same train');
			return false;
		}
	}

	return true;
}

function checkForLocomotivesInEachTrain(trains) {
	for (let index = 0, len = trains.length; index < len; index++) {
		const train = trains[index];
		const coaches = train.coaches;

		if (coaches[0].type !== Constants.COACH_TYPES.LOCOMOTIVE) {
			alert('Some trains doesn"t have locomotives. Please attach locomotives to all the trains');
			return false;
		}

		if (!train.departure || !train.arrival) {
			alert('Please select arrival and departure time');
			return false;
		}
	}

	return true;
}

const CreateTrainReducer = (state = {
	trains: [],
}, action) => {
	switch(action.type) {
		case types.ADD_TRAIN:
			const trains = state.trains.concat();
			trains.push({
				trainId: trains.length + 1,
				coaches: [action.coach],
			});
			return Object.assign({}, state, {
				trains,
			});
		case types.ADD_COACH:
			const type = action.coach.type;
			if (!validationBeforeAddingCoach(action.train, type)) return state;
			return Object.assign({}, state, {
				trains: state.trains.map((train) => {
					if (action.train.trainId === train.trainId) {
						if (type !== Constants.COACH_TYPES.LOCOMOTIVE) {
							train.coaches.push(action.coach);
						} else {
							train.coaches.unshift(action.coach);	
						}
					}
					return train;
				}),
			});
		case types.CHANGE_TRAIN_TIMINGS:
			return Object.assign({}, state, {
				trains: state.trains.map((train) => {
					if (train.trainId === action.train.trainId) {
						train[action.property] = action.value;
					}
					return train;
				}),
			});
		case types.CALCULATE_TRACKS:
			if (!checkForLocomotivesInEachTrain(state.trains) || state.trains.length === 0) return state;
			return Object.assign({}, state, {
				numberOfTracks: calculateTracks(state.trains, 0),
			});
		default:
			return state;
	}
};

export default CreateTrainReducer;