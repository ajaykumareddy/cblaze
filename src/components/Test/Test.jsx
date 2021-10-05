import React from "react";
import './Test.scss';
import logo from '../../assets/icons/Logohead.svg';
import SchoolProfile from '../../assets/icons/fa-regular_registered.svg';
import admissionDetails from '../../assets/icons/clarity_form-line.svg';
import staffDetails from '../../assets/icons/ph_chalkboard-teacher.svg';
import Button from "../lib/Button/Button";
import axios from "axios";

class Test extends React.Component {


    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="Test">
                <div className="mainContainer">
                    <div className="header">
                        <h3>Select the Admission Form</h3>

                        <div className="headerBtn">
                            <button>Basic Report</button>
                            <button>Bulk Update</button>
                        </div>
                    </div>

                    <div className="form-card">
                        <h4>Admission Details</h4>

                        <div className="inputFields">
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Admission Type</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Academic Year</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Standard</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>First Name</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Last Name</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Tamil First Name</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Tamil Last Name</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Date of Birth </p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Father Full Name</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Mother Full Name</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Place of Birth</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Last Name</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Religion</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Nationality</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Mother Tongu</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Blood Group</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Medium Of Study</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Gender</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Date of Joining</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Email ID</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Roll No</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Community</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Caste</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Sub Caste</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Emis No</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Family Income Per Month</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Previous State Board</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Joining Standard</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Previous Standard</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Previous School Attendance</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Previous School Name</p>
                                    </div>
                            </div>
                        </div>
                    </div>

                    <div className="form-card">
                        <h4>Address Details</h4>

                        <div className="inputFields">
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Permanent Address</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Address</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>City</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Country</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>State</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Pincode</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Residential Address</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Address</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>City</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Country</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>State</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Pincode</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-card">
                        <h4>Add Detailed Address</h4>

                        <div className="inputFields">
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Building No</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Flat No</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Block No</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Avenue</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Street No</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Country</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>City</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>State</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Pincode</p>
                                    </div>
                            </div>
                        </div>
                    </div>

                    <div className="form-card">
                        <h4>Father Details</h4>

                        <div className="inputFields">
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Father Profession</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Father Email</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Father Office Address</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Land Line No</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Phone No</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>whatsapp No</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Father Income Per Month</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Religion</p>
                                    </div>
                            </div>
                        </div>
                    </div>

                    <div className="form-card">
                        <h4>Mother Details</h4>

                        <div className="inputFields">
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Mother Profession</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Mother Email</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Mother Office Address</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Land Line No</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Phone No</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>whatsapp No</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Mother Income Per Month</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Religion</p>
                                    </div>
                            </div>
                        </div>
                    </div>

                    <div className="form-card">
                        <h4>Basic Details</h4>

                        <div className="inputFields">
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Aadhar Card No</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Community Certificate No</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Height</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Weight</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>RationCard No</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Stay Hostel</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Pupli Character</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Discount Category </p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Identify Mark1</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Identify Mark2</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Student Type</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Sport Team</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Scholarship Status</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Status</p>
                                    </div>
                            </div>
                        </div>
                    </div>

                    <div className="form-card">
                        <h4>Documents To attach</h4>

                        <div className="inputFields">
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Student Image</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Father Image</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Mother Image</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Aadhar card</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Community Certificate</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Birth Certificate</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p> Ration Card</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>Admission Form Upload</p>
                                    </div>
                            </div>
                            <div className="detailCheckCont">
                                <input type="checkbox" />
                                    <div className="detailCheck">
                                        <p>RTE certificates</p>
                                    </div>
                            </div>
                        </div>
                    </div>

                    <div className="btns">
                        <button className="btnOutline">New Form</button>
                        <button className="btnFill">Bulk uplode</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Test;