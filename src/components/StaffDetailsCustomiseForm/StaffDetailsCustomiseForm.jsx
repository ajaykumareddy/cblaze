import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import "./StaffDetailsCustomiseForm.scss";
import CreateForm from "../lib/CreateForm/CreateForm";

class StaffDetailsCustomiseForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fieldsData : [{"id":1,"category":"Staff Details","fields":[{"id":1,"categoryId":1,"fieldName":"Employee Name","fieldType":"textfield","isChecked":false},
                    {"id":2,"categoryId":1,"fieldName":"First Name","fieldType":"textfield","isChecked":false},
                    {"id":3,"categoryId":1,"fieldName":"Last Name","fieldType":"selectfield","isChecked":false},
                    {"id":4,"categoryId":1,"fieldName":"Tamil First Name","fieldType":"textfield","isChecked":false},
                    {"id":5,"categoryId":1,"fieldName":"Last School Name","fieldType":"textfield","isChecked":false},
                    {"id":6,"categoryId":1,"fieldName":"Staff Council","fieldType":"textfield","isChecked":false},
                    {"id":7,"categoryId":1,"fieldName":"Date of Birth","fieldType":"textfield","isChecked":false},
                    {"id":8,"categoryId":1,"fieldName":"Father Full Nam","fieldType":"textfield","isChecked":false},
                    {"id":9,"categoryId":1,"fieldName":"Mother Full Name","fieldType":"textfield","isChecked":false},
                    {"id":10,"categoryId":1,"fieldName":"Employee Name","fieldType":"textfield","isChecked":false}]},
                {"id":2,"category":"Staff Details",fields:[{"id":1,"categoryId":2,"fieldName":"Employee Name","fieldType":"textfield","isChecked":false},
                        {"id":2,"categoryId":2,"fieldName":"First Name","fieldType":"textfield","isChecked":false},
                        {"id":3,"categoryId":2,"fieldName":"Last Name","fieldType":"textfield","isChecked":false},
                        {"id":4,"categoryId":2,"fieldName":"Tamil First Name","fieldType":"textfield","isChecked":false},
                        {"id":5,"categoryId":2,"fieldName":"Last School Name","fieldType":"textfield","isChecked":false},
                        {"id":6,"categoryId":2,"fieldName":"Staff Council","fieldType":"textfield","isChecked":false},
                        {"id":7,"categoryId":2,"fieldName":"Date of Birth","fieldType":"textfield","isChecked":false},
                        {"id":8,"categoryId":2,"fieldName":"Father Full Nam","fieldType":"textfield","isChecked":false},
                        {"id":9,"categoryId":2,"fieldName":"Mother Full Name","fieldType":"textfield","isChecked":false},
                        {"id":10,"categoryId":2,"fieldName":"Employee Name","fieldType":"textfield","isChecked":false}]}]
        }
        this.changeHandler=this.changeHandler.bind(this)
    }

    changeHandler(data){
        // console.log(data.category,data.categoriesId,data.fieldId,data.checked)
        this.setState(previousState =>({
            fieldsData: previousState.fieldsData.map(items=>
            items.id==data.categoriesId ?{...items,fields:items.fields.map(fields=>
                fields.id==data.fieldId?{...fields,isChecked:!fields.isChecked}:fields)}:items
            )
        }))

    }

    render() {
        return (
            <div className="staffDetailsContainer">
                <div className="staffDetails">
                    <div className="staffDetailsHeader">
                        <h3>Select the Requirement Form</h3>
                    </div>
                    <div className="staffDetailsMain">
                        <CreateForm data = {this.state.fieldsData} onChange={this.changeHandler}/>
                        <div className="btns">
                            <button className="btnOutline" onClick={()=>{
                                this.props.history.push({pathname:"/school/staffpreview",state:this.state.fieldsData})
                            }}>Preview</button>
                            <button className="btnFill">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(StaffDetailsCustomiseForm);