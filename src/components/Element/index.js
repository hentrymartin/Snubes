import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import './Element.scss';

const Types = {
  ELEMENT: 'element',
};

const elementSource = {
  isDragging(props, monitor) {
    return monitor.getItem().id === props.id;
  },

  beginDrag(props, monitor, component) {
    const item = { type: props.type };
    return item;
  },

  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class Element extends Component {
	render() {
		const { connectDragSource } = this.props;

		return connectDragSource(
			<div className="element">
				<div className="element__image-wrapper">
					<img src={this.props.source}/>
				</div>
				<div className="element__type">
					{
						this.props.type
					}
				</div>
			</div>
		);
	}
}

Element.defaultTypes = {
	type: 'carriage',
};

export default DragSource(Types.ELEMENT, elementSource, collect)(Element);
