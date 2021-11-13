import React from "react";
import './SchoolHome.scss';
import {withTranslation} from "react-i18next";

import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Button from "../lib/Button/Button";
import SchoolDetails from "../SchoolDetails/SchoolDetails";
import {Route, Switch} from "react-router-dom";
import Standard from "../Standard/Standard";
import Test from "../Test/Test";
import StaffDetails from "../StaffDetails/StaffDetails";
import StaffDetailsCustomiseForm from "../StaffDetailsCustomiseForm/StaffDetailsCustomiseForm";
import StaffDetailsPreview from "../StaffDetailsPreview/StaffDetailsPreview";
import AdminHome from "../Admin/AdminHome/AdminHome";
import AdminSchoolStandardsInfo from "../Admin/AdminSchoolStandardsInfo/AdminSchoolStandardsInfo";


class SchoolHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            schoolDetails: {}
        }

    }

    render() {
        const  {t} = this.props;
        return <div className="Home">
                    <div className="container">
                        <Header />
                        <div className="main-section">
                           <Sidebar />
                            <div className="school-profile">
                                <Switch>
                                <Route exact path="/school/details">
                                    <div className="title">{t('SCHOOL.CREATE_PROFILE')}</div>
                                    <SchoolDetails />
                                </Route>
                                    <Route exact path="/school/standards">
                                    <Standard />
                                    <div className="save-button-area">
                                        <Button name="Save" />
                                    </div>
                                </Route>
                                <Route exact path="/school/admission">
                                    <Test />
                                </Route>
                                <Route exact path="/school/staff">
                                    <StaffDetails />
                                </Route>
                                <Route exact path="/school/addStaff">
                                    <StaffDetailsCustomiseForm />
                                </Route>
                                <Route exact path="/school/staffpreview">
                                    <StaffDetailsPreview />
                                </Route>
                                </Switch>
                            </div>
                        </div>
                    </div>
               </div>
    }


}

export  default withTranslation() (SchoolHome);