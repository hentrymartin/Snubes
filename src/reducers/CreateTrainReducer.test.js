import CreateTrainReducer from './CreateTrainReducer';
import * as types from './../actions/types';
import { Constants } from './../constants';
import { generateCoachByType, generateTrain } from './../utils';

test('Testing CreateTrainReducer ADD_TRAIN action', () => {
	const initialState = {
		trains: [],
	};

	const nextState = CreateTrainReducer(initialState, {
		type: types.ADD_TRAIN,
		coach: generateCoachByType(Constants.COACH_TYPES.LOCOMOTIVE),
	});

	expect(nextState.trains.length).toEqual(1);
});

test('Testing CreateTrainReducer ADD_COACH action', () => {
	const initialState = {
		trains: [generateTrain(1, 15, 30)],
	};

	const coachesLength = initialState.trains[0].coaches.length;

	const nextState = CreateTrainReducer(initialState, {
		type: types.ADD_COACH,
		train: generateTrain(1, 15, 30),
		coach: generateCoachByType(Constants.COACH_TYPES.CARRIAGE),
	});

	expect(nextState.trains[0].coaches.length).toEqual(coachesLength + 1);
});

test('Testing CreateTrainReducer CALCULATE_TRACKS action', () => {
	const initialState = {
		trains: [generateTrain(1, 15, 30)],
	};

	const nextState = CreateTrainReducer(initialState, {
		type: types.CALCULATE_TRACKS,
	});

	expect(nextState.numberOfTracks).toEqual(1);
});