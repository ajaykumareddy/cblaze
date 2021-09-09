import React from "react";
import './register.scss'
import axios from "axios";
import { Link, withRouter} from "react-router-dom";
import {withTranslation} from "react-i18next";
import Button from "../lib/Button/Button";
import TextField from "../lib/TextField/TextField";
import ENDPOINT from "../../config/endpoints";

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            schoolName: '',
            email: '',
            phone: '',
            address:''
        };

        this.schoolEmail = React.createRef();
        this.phone = React.createRef();
        this.schoolAddress = React.createRef();
        this.registerClick = this.registerClick.bind(this);
        this.setSchoolName = this.setSchoolName.bind(this);
    }

    setSchoolName(schoolName) {
        this.setState({ schoolName: schoolName }, () => {
            console.log(this.state.schoolName);
        });
    }

    validForm() {
        let valid = true;
        if(this.state.schoolName.length === 0) {
            valid = false;
        }
        return valid;
    }

    registerClick() {
        const { schoolName } = this.state;
        const { history} = this.props;
        if(!this.validForm()) {
            return;
        }
        axios.post(ENDPOINT.REGISTER, {
            name: schoolName,
            email: this.schoolEmail.current.value,
            phone: parseInt(this.phone.current.value),
         //   schoolAddress: this.schoolAddress.current.value,
            type: 1
        }).then(function (response) {
            console.log(response);
            window.sessionStorage.setItem('token' , response.data.token.access_token);
            history.push('/verifyotp', {userId: response.data.user.id});
        }).catch(function (error) {
            console.log(error);
        });
    }

    render() {
        const {t} = this.props;
        return (
            <div className="Register">
                <div className="register-title">
                    <p>{t('SCHOOL.REGISTER')}</p>
                </div>
                <div className="register-body">
                    <div>
                        <TextField title={t('SCHOOL.NAME')} placeholder={t('SCHOOL.PLACEHOLDER.NAME')} autoFocus={true} inputHandler={this.setSchoolName} />
                    </div>
                    {/* <div className="form-controls">
                    <label>School Name</label>
                    <div>
                        <input type="text" placeholder="Enter Your School Name" ref={this.schoolName}/>
                    </div>
                </div> */}
                    <div className="form-controls">
                        <label>{t('SCHOOL.EMAIL')}</label>
                        <div>
                            <input type="text" placeholder={t('SCHOOL.PLACEHOLDER.EMAIL')} ref={this.schoolEmail} />
                        </div>
                    </div>
                    <div className="form-controls">
                        <label>{t('SCHOOL.PHONE')}</label>
                        <div>
                            <input type="text" placeholder={t('SCHOOL.PLACEHOLDER.PHONE')} ref={this.phone} />
                        </div>
                    </div>
                    <div className="form-controls">
                        <label>{t('SCHOOL.ADDRESS')}</label>
                        <div>
                            <input type="text" placeholder={t('SCHOOL.PLACEHOLDER.ADDRESS')} ref={this.schoolAddress} />
                        </div>
                    </div>
                    {/*<Link to="/verifyotp">
                        <div>
                            <Button name="Register" clickHandler={this.registerClick} />
                        </div>
                    </Link>*/}

                        <div>
                            <Button name={t('REGISTER')} clickHandler={this.registerClick} />
                        </div>

                    <div className="no-account">
                        <span>{t('SCHOOL.EXISTING_ACCOUNT')}</span><span className="login"><Link to="/">{t('LOGIN')}</Link></span>
                    </div>
                </div>
            </div>);
    }
}
export default withTranslation()(withRouter(Register));