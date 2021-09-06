import React from "react";
import './Button.scss';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { name, clickHandler } = this.props;
        return (<div className="Button" onClick={clickHandler}>
            <span className="button-title">{name}</span>
        </div>)
    }

}

export default Button;