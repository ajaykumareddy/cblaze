import React from "react";
import './SchoolHome.scss';
import {withTranslation} from "react-i18next";

import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Button from "../lib/Button/Button";
import SchoolDetails from "../SchoolDetails/SchoolDetails";
import Dialog from "../lib/Dialog/Dialog";
import StandardSubjects from "../StandardSubjects/StandardSubjects";
import {Route, Switch} from "react-router-dom";


class SchoolHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
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
                                    <div className="standard-details">
                                        <div className="section-header">
                                            <div className="title">Choose the Standard available in school</div>
                                            <button className="add-standard">+Add Standard</button>
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
                                    <div className="save-button-area">
                                        <Button name="Save" />
                                    </div>
                                </Route>
                                <Route exact path="/school/admission">

                                </Route>
                                <Route exact path="/school/staff">

                                </Route>
                                </Switch>
                            </div>
                        </div>
                    </div>
            {this.state.showDialog ? <Dialog closeHandler={() => {this.setShowDialog(false)}}> <StandardSubjects /></Dialog> : ''}
               </div>
    }

    setShowDialog(b) {
        this.setState({showDialog: b});
    }
}

export  default withTranslation() (SchoolHome);