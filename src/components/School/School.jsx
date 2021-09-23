import React from "react";
import './School.scss';
import educationImg from '../../assets/icons/education.svg';
import schoolImg from '../../assets/icons/school.svg';
import studentImg from '../../assets/icons/student.svg';
import teacherImg from '../../assets/icons/teach.svg';
import LoginSidebarImage from '../../components/LoginSidebarImage/LoginSidebarImage';
import Register from '../../components/Register/Register';
import { Switch, Route, Link, BrowserRouter,Redirect } from "react-router-dom";
import Login from '../../components/Login/Login';
import OtpScreen from '../../components/OtpScreen/OtpScreen';
import Password from '../../components/Password/Password';
import logo from '../../assets/svg/logo.svg';


class School extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (<div className="School">
            <div className="box">
                <div className="section-A">
                    <LoginSidebarImage src={schoolImg} active="true" />
                    <LoginSidebarImage src={educationImg} />
                    <LoginSidebarImage src={teacherImg} />
                    <LoginSidebarImage src={studentImg} />
                </div>
                <div className="section-B">
                    <img alt="" width="150" height="150" src={logo} />
                    <p className="welcome">Welcome to IIMS</p>
                    <p className="sub_head">Education Managemnet Services</p>

                </div>
                <div className="section-C">
                            <Route path="/register">
                                <Register />
                            </Route>
                            <Route  path="/verifyotp">
                                <OtpScreen />
                            </Route>
                            <Route  path="/setpassword">
                                <Password />
                            </Route>
                            <Route  path="/login">
                                <Login />
                            </Route>
                </div>
            </div>

        </div>)
    }
}

export default School;