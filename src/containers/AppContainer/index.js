import React from 'react';
import { connect } from 'react-redux';
import {
	addTrain,
	addCoach,
  changeTrainTimings,
  calculateTracks,
} from './../../actions';
import AppWrapper from './../../components/AppWrapper';

const mapStatesToProps = (state) => {
  return {
  	trains: state.CreateTrainReducer.trains,
    numberOfTracks: state.CreateTrainReducer.numberOfTracks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    targetDropped: (coach) => {
      dispatch(addTrain(coach));
    },
    addCoach: (train, coach) => {
    	console.log(coach, train);
    	dispatch(addCoach(coach, train));
    },
    onTimingChange: (property, train, value) => {
      dispatch(changeTrainTimings(property, train, value));
    },
    onCalculateTracks: () => {
      dispatch(calculateTracks());
    },
  };
};

const AppContainer = connect(mapStatesToProps, mapDispatchToProps)(AppWrapper);

export default AppContainer;