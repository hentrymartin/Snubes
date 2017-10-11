import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { DropTarget } from 'react-dnd';
import classnames from 'classnames';

const Types = {
  ELEMENT: 'element',
};

const dropingTarget = {
  hover(props, monitor, component) {
    const clientOffset = monitor.getClientOffset();
    const componentRect = findDOMNode(component).getBoundingClientRect();
    const isJustOverThisOne = monitor.isOver({ shallow: true });
    const canDrop = monitor.canDrop();
  },

  drop(props, monitor, component) {
    if (monitor.didDrop()) {
      return;
    }
    const item = monitor.getItem();

    console.log(item);

    props.targetDropped(item);

    return { moved: true };
  }
};

/**
 * Specifies which props to inject into your component.
 */
function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
    canDrop: monitor.canDrop(),
    itemType: monitor.getItemType()
  };
}

class DropTargetWrapper extends Component {
	render() {
		const { connectDropTarget } = this.props;
		return connectDropTarget(
			<div className={classnames('target', this.props.className)}>
				{this.props.children}
			</div>
		);
	}
}

export default DropTarget(Types.ELEMENT, dropingTarget, collect)(DropTargetWrapper);
