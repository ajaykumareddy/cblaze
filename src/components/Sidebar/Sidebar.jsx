import React from "react";
import './Sidebar.scss';
import SchoolProfile from "../../assets/icons/fa-regular_registered.svg";
import admissionDetails from "../../assets/icons/clarity_form-line.svg";
import staffDetails from "../../assets/icons/ph_chalkboard-teacher.svg";
import {Link} from "react-router-dom";

class Sidebar extends React.Component {

    render() {
        return <div className="Sidebar">
                <div className="sidebar-container">

                    <div className="active-box active"></div>
                    <img src={SchoolProfile} alt="Register School" />
                </div>
                <div  className="sidebar-container">
                    <div className="active-box"></div>
                    <img src={admissionDetails} alt="Admission Details" />
                </div>
                <div className="sidebar-container">
                    <div className="active-box"></div>
                    <img src={staffDetails} alt="Staff Details" />
                </div>
        </div>
    }
}

export default Sidebar;