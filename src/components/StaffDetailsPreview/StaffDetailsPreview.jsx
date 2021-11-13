import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import PreviewForm from "../lib/PreviewForm/PreviewForm";

class StaffDetailsPreview extends Component {
    constructor(props) {
        super(props);
        this.fieldsData = this.props.location.state
    }
    render() {
        console.log(this.props)
        return (
            <div className="staffDetailsContainer">
                <div className="staffDetails">
                    <div className="staffDetailsHeader">
                        <h3>Select the Requirement Form</h3>
                    </div>
                    <div className="staffDetailsMain">
                        <PreviewForm data = {this.fieldsData}/>
                        <div className="btns">
                            <button className="btnOutline">Generate Link</button>
                            <button className="btnFill">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(StaffDetailsPreview);