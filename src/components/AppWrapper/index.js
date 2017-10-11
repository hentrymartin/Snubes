import React, { Component } from 'react';
import Pallete from './../Pallete';
import Workspace from './../Workspace';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

class AppWrapper extends Component {
	render() {
		return (
			<div className="app-wrapper">
				<Pallete/>
				<Workspace
					trains={this.props.trains}
					targetDropped={this.props.targetDropped}
					addCoach={this.props.addCoach}
					onTimingChange={this.props.onTimingChange}
					onCalculateTracks={this.props.onCalculateTracks}
					numberOfTracks={this.props.numberOfTracks}
				/>
			</div>
		);
	}
}

export default DragDropContext(HTML5Backend)(AppWrapper);
