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