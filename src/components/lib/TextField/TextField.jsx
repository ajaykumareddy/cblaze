import React from "react";
import './TextField.scss';


class TextField extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};

        this.value = React.createRef();

    }

    render() {
        const { title, type, placeholder, autoFocus, inputHandler,value,error } = this.props;
        return (<div className="TextField">
            <label className={`text-title`}>{title}</label>
            <div className="text-field-input">
                <input className={`input-text ${error ? 'error' : ''}`}
                       autoComplete="f**k"
                       type={type}
                       placeholder={placeholder}
                       autoFocus={autoFocus} 
                       ref={this.value} 
                       onInput={() => { inputHandler(this.value.current.value) }}
                       value={value}
                />
                {error && <span className="error"> {error}</span>}
            </div>
        </div>)
    }

}

export default TextField;