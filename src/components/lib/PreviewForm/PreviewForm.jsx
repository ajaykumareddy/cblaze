import React, {Component} from 'react';
import "./PreviewForm.scss"

class PreviewForm extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="previewFormContainer">
                <div className="previewForm">
                    <div className="createFormCard">
                        {
                            this.props.data.map(item=>
                                <div className="formCard">
                                    <h4>{item.category}</h4>
                                    <div className="previewInputFields">
                                        {
                                            item.fields.map(field=>
                                            {if(field.isChecked==true){
                                                return(<div className="formFieldContainer">
                                                    <div className="staffFieldsLable">
                                                        <label>{field.fieldName}</label>
                                                    </div>
                                                    <div className="staffDetailsInput">
                                                        <input className="textField" type="text"/>
                                                    </div>
                                                </div>)
                                            }
                                            else{
                                                console.log(field)
                                            }}

                                            )
                                        }
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default PreviewForm;