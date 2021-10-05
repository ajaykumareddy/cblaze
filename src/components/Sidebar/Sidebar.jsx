import React from "react";
import './Sidebar.scss';
import SchoolProfile from "../../assets/icons/fa-regular_registered.svg";
import admissionDetails from "../../assets/icons/clarity_form-line.svg";
import staffDetails from "../../assets/icons/ph_chalkboard-teacher.svg";
import {Link, NavLink} from "react-router-dom";

class Sidebar extends React.Component {

    render() {
        return <div className="Sidebar">

            <NavLink to="/school/details" activeClassName="selected">
                <div className="sidebar-container">
                    <div className="active-box active"></div>
                    <img src={SchoolProfile} alt="Register School" />
                </div>
            </NavLink>
            <NavLink to="/school/standards" activeClassName="selected">
                <div className="sidebar-container">
                    <div className="active-box active"></div>
                    <img src={SchoolProfile} alt="School Standards" />
                </div>
            </NavLink>
            <NavLink to="/school/admission" activeClassName="selected">
                <div  className="sidebar-container">
                    <div className="active-box active"></div>
                    <img src={admissionDetails} alt="Admission Details" />
                </div>
            </NavLink>
            <NavLink to="/school/staff" activeClassName="selected">
                <div className="sidebar-container">
                    <div className="active-box active"></div>
                    <img src={staffDetails} alt="Staff Details" />
                </div>
            </NavLink>
        </div>
    }
}

export default Sidebar;