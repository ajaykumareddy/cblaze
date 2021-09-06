import React from "react";
import './TextField.scss';


class TextField extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};

        this.value = React.createRef();

    }

    render() {
        const { title, placeholder, autoFocus, inputHandler } = this.props;
        return (<div className="TextField">
            <label className="text-title">{title}</label>
            <div className="text-field-input">
                <input className="input-text"
                       type="text"
                       placeholder={placeholder}
                       autoFocus={autoFocus} 
                       ref={this.value} 
                       onInput={() => { inputHandler(this.value.current.value) }} 
                />
            </div>
        </div>)
    }

}

export default TextField;