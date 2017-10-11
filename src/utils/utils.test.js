import { calculateTracks, generateTrain } from './index';
import { Constants } from './../constants';
import moment from 'moment';

test('testing number of tracks algorithm for 1 train', () => {

	const trains = [
		generateTrain(1, 15, 30),
	];
	const tracksRequired = calculateTracks(trains, 0);
	expect(tracksRequired).toEqual(1);
});

test('testing number of tracks algorithm for 2 trains', () => {

	const trains = [
		generateTrain(1, 15, 30),
		generateTrain(2, 20, 35),
	];
	const tracksRequired = calculateTracks(trains, 0);
	expect(tracksRequired).toEqual(2);
});


test('testing number of tracks algorithm for 3 trains', () => {

	const trains = [
		generateTrain(1, 15, 30),
		generateTrain(2, 20, 35),
		generateTrain(3, 45, 50),
	];
	const tracksRequired = calculateTracks(trains, 0);
	expect(tracksRequired).toEqual(2);
});