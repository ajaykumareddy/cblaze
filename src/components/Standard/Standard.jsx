import React from "react";
import Dialog from "../lib/Dialog/Dialog";
import StandardSubjects from "../StandardSubjects/StandardSubjects";
import "./Standard.scss"
import Button from "../lib/Button/Button";
import TextField from "../lib/TextField/TextField";
import axios from "axios";
import ENDPOINT from "../../config/endpoints";
import SchoolStandardsService from "../../services/SchoolStandardsService";


class Standard extends React.Component {

    constructor() {
        super();
        this.state = {
            showDialog: false,
            standardName: '',
            showAddStandardsDialog: false
        };
        this.setAddStandardsDialog = this.setAddStandardsDialog.bind(this)
        this.setStandardsName = this.setStandardsName.bind(this)
        this.addStandards = this.addStandards.bind(this)
    }

    componentDidMount() {
        let allSchoolStandards = SchoolStandardsService.getSchoolStandards()
        this.setState()
    }

    setShowDialog(b) {
        this.setState({showDialog: b});
    }
    setAddStandardsDialog(){
        this.setState({showAddStandardsDialog:!this.state.showAddStandardsDialog})
    }

    addStandards(){
        SchoolStandardsService.addNewStandards(this.state.standardName).then(function (response){

        }).catch(function (error){

        })
        }

    setStandardsName(standardName){
        this.setState({standardName:standardName})
        console.log(this.state.standardName)
    }


    render() {
        return (
            <div>
                <div className="standard-details">
                    <div className="section-header">
                        <div className="title">Choose the Standard available in school</div>
                        <button className="add-standard" onClick={this.setAddStandardsDialog}>+Add Standard</button>
                    </div>
                    <div className="area-1">
                        <table>
                            <thead>
                            <tr>
                                <th>S.NO</th>
                                <th>Standard</th>
                                <th>Sections</th>
                                <th>Subjects</th>
                                <th>active</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>

                                <td>1</td>
                                <td>First</td>
                                <td>A,B,C,D</td>
                                <td>English,Telugu,Hindi</td>
                                <td>
                                    <div className="slider-container">
                                        <input type="checkbox"   />
                                        <div className="toggle-switch"></div>
                                    </div>
                                </td>
                                <td onClick={() => {this.setShowDialog(true);}}>-</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>


                </div>
                {this.state.showDialog ? <Dialog closeHandler={() => {this.setShowDialog(false)}}> <StandardSubjects /></Dialog> : ''}
                {this.state.showAddStandardsDialog ? <Dialog closeHandler={() => {this.setAddStandardsDialog()}}>
                <div className={"dialog-container"}>
                    <div className={"dialog-content-header"}>
                        <div dialog-title>
                            Add New Standard
                        </div>
                        <hr/>
                    </div>
                    <div className={"dialog-body"}>
                        <div>
                            <TextField title={"standard Name"} placeholder={"enter standard name"} autoFocus={true} inputHandler={this.setStandardsName} value={this.state.standardName} />
                        </div>
                        <div>
                            <Button name={"Save"} clickHandler={this.addStandards}/>
                        </div>
                    </div>
                </div>

                </Dialog> : ''}
            </div>
        );
    }
}

export default Standard;