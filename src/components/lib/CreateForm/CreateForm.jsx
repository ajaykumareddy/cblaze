import React, {Component} from 'react';
import "./CreateForm.scss"
class CreateForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)
        return (
            <div className="createFormContainer">
                <div className="createForm">
                    <div className="createFormCard">
                        {
                            this.props.data.map(categories=>
                                <div className="formCard">
                                    <h4>{categories.category}</h4>
                                    <div className="inputFields">
                                    {
                                        categories.fields.map(field=>
                                                <div className="formFieldContainer">
                                                    <input type="checkbox"  onChange={(event) =>
                                                        this.props.onChange({"category":categories.category,"categoriesId":categories.id, "fieldId":field.id, "checked":event.target.checked})}/>
                                                    <div className="formFieldName">
                                                        <p>{field.fieldName}</p>
                                                    </div>
                                                </div>
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

export default CreateForm;