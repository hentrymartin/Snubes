import React, { Component } from 'react';
import DropTargetWrapper from './../DropTarget';
import TrainsList from './../TrainsList';
import CalculateTracks from './../CalculateTracks';
import './Workspace.scss';

class Workspace extends Component {
	render() {
		console.log(this.props.trains);
		return (
			<section className="workspace">
				<h1>Build Trains Here</h1>
				<div className="workspace__factory">
					<TrainsList
						trains={this.props.trains}
						addCoach={this.props.addCoach}
						onTimingChange={this.props.onTimingChange}
					/>
					<DropTargetWrapper
						className="workspace__factory__create-train"
						targetDropped={this.props.targetDropped}>
						<div>
							Drag Drop Elements here to Create Train
						</div>
					</DropTargetWrapper>
				</div>
				<CalculateTracks
					onCalculateTracks={this.props.onCalculateTracks}
				/>
				{
					this.props.numberOfTracks &&
					<div>
						The number of tracks required in the station are {this.props.numberOfTracks}
					</div>
				}
			</section>
		);
	}
}

export default Workspace;
