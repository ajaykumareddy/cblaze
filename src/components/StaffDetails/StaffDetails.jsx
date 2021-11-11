import React from "react";
import {withRouter} from "react-router-dom";
import './StaffDetails.scss';
import Button from "../lib/Button/Button";
import TextField from "../lib/TextField/TextField";
import Staff from "./Staff";
import NoData from "../NoData/NoData";
import Test from "../Test/Test";

class StaffDetails extends React.Component {
    constructor(props) {
        super(props);

        this.data = ["Ajay","Bhanu","Chandu","Eshwar","Franklin","Gowsalya","Hema","Illayaraja","Jeswanth","Keerthi","Lavanya","Manisha","Nitish","Omkar","Prasanth","Quincy","Rakesh","Sri Ram"];
        this.state = {
            list: this.data,
            isNew: false
        };


        this.createStaff = this.createStaff.bind(this);
        this.searchStaff = this.searchStaff.bind(this);
    }


    createStaff() {
        const { history} = this.props;
        history.push('/school/addStaff');
    }

    searchStaff(searchTxt) {
        let s = this.data.filter( (d) => {
            return d.toLowerCase().includes(searchTxt.toLowerCase());
        });
        this.setState({list: s});
    }

    render() {
        let {list,isNew} = this.state;
        return <div className="StaffDetails">
            {isNew && <React.Fragment >
                <Test />

            </React.Fragment> }
            { !isNew && <React.Fragment>
                    <div className="staff-header">
                        <div className="staff-header-title">
                            <h3>Staff Details</h3>
                        </div>
                        <div className="staff-header-options">
                            { list && list.length > 0 &&
                            <React.Fragment>
                               <div className="search-box"> <TextField type="search" placeholder="Search Staff" inputHandler={this.searchStaff}/></div>
                               <div className="no-color" >
                                   <Button name="Basic Reports" />
                               </div>
                            </React.Fragment>
                            }

                            <div className="green">
                                <Button name="Download/Import" />
                            </div>
                            <div>
                                <Button name="Create New" clickHandler={this.createStaff} />
                            </div>
                        </div>
                    </div>
                    <div className="staff-body">
                        {list && list.length === 0 && <NoData />}

                        { list && list.length !== 0 && <>

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
                                    <th>Designation</th>
                                    <th>Phone Number</th>
                                    <th>Status</th>
                                    <th>Designation</th>
                                    <th>Phone Number</th>
                                    <th>Status</th>
                                    <th>Designation</th>
                                    <th>Phone Number</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <Staff data={this.state.list}/>
                                </tbody>
                            </table>

                        </div>
                        </>}
                    </div>
            </React.Fragment> }
            </div>
    }
}

export default withRouter(StaffDetails);
