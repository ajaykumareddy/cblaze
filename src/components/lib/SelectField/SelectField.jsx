import React from "react";
import './SelectField.scss';

class SelectField extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {};

        this.value = React.createRef();
    }
    
    render() {
        const {title,list,options,placeholder,value,inputHandler} = this.props;
        return  (<div className="SelectField">
                <label>{title}</label>

            <div>
                <input autoComplete='f**k'
                    ref={this.value}
                    list={list} value={value}
                    placeholder={placeholder}
                    onInput={() => inputHandler(this.value.current.value)} />
            </div>
            <div>
                <datalist id={list}>
                    {options && options.map((option,index) => {
                        return  <option key={index}>{option}</option>
                    })}

                </datalist>
            </div>

            </div>)
    }

}

export default SelectField;