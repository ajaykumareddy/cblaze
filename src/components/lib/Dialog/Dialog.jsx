import React from "react";
import './Dialog.scss';

function Dialog(props) {
    const { closeHandler } = props;
    return <div className="Dialog">
            <div className="modal-content" style={{'width': '50%'}} >
                <div className="close-cross" onClick={closeHandler}></div>
                {props.children}
            </div>
    </div>
}

export default Dialog;