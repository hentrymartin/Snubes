import React from 'react';
import { DragSource } from 'react-dnd';
import PropTypes from 'prop-types';
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

const Element = (props) => {
  const { connectDragSource } = props;
  return connectDragSource(
    <div className="element">
      <div className="element__image-wrapper">
        <img src={props.source}/>
      </div>
      <div className="element__type">
        {
          props.type
        }
      </div>
    </div>
  );
};

Element.defaultTypes = {
  type: 'carriage',
	source: '',
};

Element.proptypes = {
  type: PropTypes.string,
  source: PropTypes.string,
};

export default DragSource(Types.ELEMENT, elementSource, collect)(Element);
