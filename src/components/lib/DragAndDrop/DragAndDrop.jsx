import React, {Component} from 'react';

class DragAndDrop extends Component {
    constructor() {
        super();
    }
    state = {
        drag: false
    }
    dropRef = React.createRef()
    render() {
        return (
            <div drag-and-drop-container ref={this.dropRef}>
                drop
            </div>
        )
    }
}

export default DragAndDrop;