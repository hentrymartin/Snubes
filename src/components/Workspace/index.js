import React, { Component } from 'react';
import DropTargetWrapper from './../DropTarget';
import TrainsList from './../TrainsList';
import CalculateTracks from './../CalculateTracks';
import './Workspace.scss';

const Workspace = (props) => {
	return (
		<section className="workspace">
			<h1>Build Trains Here</h1>
			<div className="workspace__factory">
				<TrainsList
					trains={props.trains}
					addCoach={props.addCoach}
					onTimingChange={props.onTimingChange}
				/>
				<DropTargetWrapper
					className="workspace__factory__create-train"
					targetDropped={props.targetDropped}>
					<div>
						Drag Drop Elements here to Create Train
					</div>
				</DropTargetWrapper>
			</div>
			<CalculateTracks
				onCalculateTracks={props.onCalculateTracks}
			/>
			{
				props.numberOfTracks &&
				<div>
					The number of tracks required in the station are {props.numberOfTracks}
				</div>
			}
		</section>
	);
};

export default Workspace;
