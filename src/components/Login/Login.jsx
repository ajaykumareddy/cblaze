import React from "react";
import './Login.scss';
import {Link, withRouter} from 'react-router-dom';
import {withTranslation} from "react-i18next";
import Button from "../lib/Button/Button";
import AuthService from "../../services/AuthService";
import TextField from "../lib/TextField/TextField";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: ''
        };
        this.login = this.login.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
    }

    setEmail(email) {
        this.setState({email: email});
    }

    setPassword(password) {
        this.setState({password: password});
    }


    login() {
        var self = this;
        const { history } = this.props;
        const { email,password } = this.state;
        AuthService.login({email: email, password: password})
            .then(function(response) {
                AuthService.setAccessToken(response.data.access_token);
                window.localStorage.setItem('userId',response.data.user_id);
                window.localStorage.setItem('schoolId',response.data.school_id);
                history.push('/school/details',{});
            }).catch(function (error) {
            self.setState({error: "Invalid Credentials"});
        });
    }

    render() {
        const { t } = this.props;
        return (
            <div className="Login">
                <div className="error-box">
                    <span>{this.state.error}</span>
                </div>
                <div className="login-title">
                    <p>Login for School</p>
                </div>
                <div className="login-body">

                    <div className="form-controls">
                        <TextField title={t('EMAIL')} type="email" placeholder={t('PLACEHOLDER.EMAIL')} autoFocus={true} inputHandler={this.setEmail} />
                    </div>
                    <div className="form-controls">
                        <TextField title={t('PASSWORD')} type="empasswordail" placeholder={t('PLACEHOLDER.PASSWORD')} autoFocus={false} inputHandler={this.setPassword} />
                    </div>

                    <div>
                        <Button name="Login" clickHandler={this.login} />
                    </div>
                    <div className="has-account">
                        <span>Don't have Account?</span><span className="register"><Link to="/register">Register</Link></span>
                    </div>
                </div>
            </div>);
    }
}

export default withTranslation()(withRouter(Login));