import { Constants } from './../constants';
import moment from 'moment';

/*
*	This is the algorithm which is useful to find out the 
* number of tracks required based on the trains arrival
* and departure timings
*/
export function calculateTracks(trains, index, numberOfTrackesRequired = 1) {
	const pivot = trains[index];
	let tracksRequired = 1;
	for (let start = index + 1, len = trains.length; start < len; start++) {
		const train = trains[start];

		if (pivot.arrival.isBefore(train.arrival) && train.arrival.isBefore(pivot.departure)) {
			tracksRequired += 1;
		}
	}

	if (tracksRequired > numberOfTrackesRequired) {
		numberOfTrackesRequired = tracksRequired;
	}

	const incrementedIndex = index + 1;

	if ( incrementedIndex < trains.length) {
		return calculateTracks(trains, incrementedIndex, numberOfTrackesRequired);
	} else {
		return numberOfTrackesRequired;
	}
}

/*
*	This is to create a train for testing purpose
*/
export function generateTrain(trainId, arrival, departure) {
	return {
		trainId: 1,
		coaches: generateStaticCoaches(),
		arrival: moment().add(arrival, 'minutes'),
		departure: moment().add(departure, 'minutes'),
	};
}

/*
*	This is to create coaches for testing purpose
*/
export function generateStaticCoaches() {
	return [
		generateCoachByType(Constants.COACH_TYPES.LOCOMOTIVE),
		generateCoachByType(Constants.COACH_TYPES.CARRIAGE),
	];
}

/*
*	This is to create a coache for testing purpose by type
*/
export function generateCoachByType(type) {
	return {
		type,
	};
}