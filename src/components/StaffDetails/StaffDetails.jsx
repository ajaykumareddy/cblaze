import React from "react";
import {withRouter} from "react-router-dom";
import './StaffDetails.scss';
import Button from "../lib/Button/Button";
import TextField from "../lib/TextField/TextField";
import Staff from "./Staff";

class StaffDetails extends React.Component {

    constructor() {
        super();
        this.state = {};

        this.createStaff = this.createStaff.bind(this);
    }


    createStaff() {
        const { history} = this.props;
        history.push('/school/addStaff')
    }

    render() {
        return <div className="StaffDetails">
                    <div className="staff-header">
                        <div className="staff-header-title">
                            <h3>Staff Details</h3>
                        </div>
                        <div className="staff-header-options">
                            <div className="search-box"> <TextField placeholder="Search Staff"/></div>
                            <div className="no-color" >
                                <Button name="Basic Reports" />
                            </div>
                            <div className="green">
                                <Button name="Download/Import" />
                            </div>
                            <div>
                                <Button name="Create New" clickHandler={this.createStaff} />
                            </div>
                        </div>
                    </div>
                    <div className="staff-body">
                        <div className="staff-category">
                            <span>Non Tech Staff</span>
                            <span className="active">Technical Staff</span>
                        </div>
                        <div className="staff-data">
                            <table>
                                <thead>
                                <tr>
                                    <th>S No</th>
                                    <th>Employee Id</th>
                                    <th>Name</th>
                                    <th>Gender</th>
                                    <th>Designation</th>
                                    <th>Phone Number</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <Staff />
                                </tbody>
                            </table>

                        </div>
                    </div>

            </div>
    }
}

export default withRouter(StaffDetails);