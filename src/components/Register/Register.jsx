import React from "react";
import './register.scss'
import axios from "axios";
import { Link, withRouter} from "react-router-dom";
import {withTranslation} from "react-i18next";
import Button from "../lib/Button/Button";
import TextField from "../lib/TextField/TextField";
import ENDPOINT from "../../config/endpoints";
import SchoolService from "../../services/SchoolService";
import AuthService from "../../services/AuthService";

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            schoolName: '',
            email: '',
            phone: '',
            address:'',
            error: {
                schoolName: '',
                email: '',
                phone: '',
                address: ''
            }
        };
        this.phone = React.createRef();
        this.schoolAddress = React.createRef();
        this.registerClick = this.registerClick.bind(this);
        this.setSchoolName = this.setSchoolName.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setPhone = this.setPhone.bind(this);
        this.setAddress = this.setAddress.bind(this);
    }

    setSchoolName(schoolName) {
        this.setState((prevState) => {
            return {
                schoolName: schoolName,
                error: {...prevState.error,schoolName: schoolName.length === 0 ? 'School Name cannot be empty' : ''}
            }
        });
    }

    setEmail(email) {
        this.setState((prevState) => {
            return {
                email: email,
                error: {...prevState.error,email: email.length === 0 ? 'Enter valid email' : ''}
            }
        });
    }

    setPhone(phone) {
        this.setState((prevState) => {
            return {
                phone: phone,
                error: {...prevState.error,phone: phone.length === 0 ? 'Enter Valid Phone Number' : ''}
            }
        });
    }

    setAddress(address) {
        this.setState((prevState) => {
            return {
                address: address,
                error: {...prevState.error,address: address.length === 0 ? 'Address cannot be empty' : ''}
            }
        });
    }

    registerClick() {
        const { schoolName,email,phone,address,error } = this.state;
        const { history} = this.props;

        if(schoolName.length === 0 || email.length === 0 || phone.length === 0 || address.length === 0 ) {
            window.alert('Errors in Form');
            return;
        }

        if(error.schoolName.length !== 0 || error.email.length !== 0 || error.phone.length !== 0 || error.address.length !== 0 ) {
            window.alert('Errors in Form');
            return;
        }

        SchoolService.registerSchool({
            name: schoolName,
            email: email,
            phone: phone,
            address: address,
        }).then(function (response) {
            console.log(response);
            // AuthService.setAccessToken(response.data.access_token);
            // window.sessionStorage.setItem('token' , response.data.token.access_token);
            history.push('/verifyotp', {userId: response.data.id});
        }).catch(function (error) {
            window.alert("SomeThing went wrong");
        });
    }

    render() {
        const {t} = this.props;
        const {error} = this.state;
        return (
            <div className="Register">
                <div className="register-title">
                    <p>{t('SCHOOL.REGISTER')}</p>
                </div>
                <div className="register-body">
                    <div>
                        <TextField title={t('SCHOOL.NAME')} type="text" placeholder={t('SCHOOL.PLACEHOLDER.NAME')} autoFocus={true} inputHandler={this.setSchoolName} value={this.state.schoolName} error={error.schoolName} />
                    </div>
                    <div>
                        <TextField title={t('EMAIL')} type="email" placeholder={t('PLACEHOLDER.EMAIL')} autoFocus={false} inputHandler={this.setEmail}  error={error.email} />
                    </div>
                    <div>
                        <TextField title={t('PHONE')} type="number" placeholder={t('PLACEHOLDER.PHONE')} autoFocus={false} inputHandler={this.setPhone}  error={error.phone} />
                    </div>
                    <div>
                        <TextField title={t('ADDRESS')} type="text" placeholder={t('PLACEHOLDER.ADDRESS')} autoFocus={false} inputHandler={this.setAddress}  error={error.address} />
                    </div>
                    <div>
                        <Button name={t('REGISTER')} clickHandler={this.registerClick} />
                    </div>
                    <div className="no-account">
                        <span>{t('SCHOOL.EXISTING_ACCOUNT')}</span><span className="login"><Link to="/login">{t('LOGIN')}</Link></span>
                    </div>
                </div>
            </div>);
    }
}
export default withTranslation()(withRouter(Register));