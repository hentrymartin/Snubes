import * as types from './types';

export function addTrain(coach) {
	return {
		type: types.ADD_TRAIN,
		coach,
	};
}

export function addCoach(coach, train) {
	return {
		type: types.ADD_COACH,
		coach,
		train,
	};
}

export function changeTrainTimings(property, train, value) {
	return {
		type: types.CHANGE_TRAIN_TIMINGS,
		property,
		train,
		value,
	};
}

export function calculateTracks() {
	return  {
		type: types.CALCULATE_TRACKS,
	};
}
