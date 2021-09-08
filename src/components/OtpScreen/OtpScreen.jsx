import React from 'react';
import './OtpScreen.scss';

import { Link ,withRouter } from 'react-router-dom';
import axios from 'axios';
import Button from '../lib/Button/Button';
import ENDPOINT from "../../config/endpoints";


class OtpScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            timer: 60
        };

        this.otp1 = React.createRef();
        this.otp2 = React.createRef();
        this.otp3 = React.createRef();
        this.otp4 = React.createRef();


        this.changeFocus = this.changeFocus.bind(this);
        this.submitOtp = this.submitOtp.bind(this);

    }

    submitOtp() {
        const { history, location} = this.props;
        let digit1= this.otp1.current.value,digit2 = this.otp2.current.value,digit3 = this.otp3.current.value,digit4 = this.otp4.current.value; 

        if(digit1 && digit2 && digit3 && digit4) {
            axios.post(ENDPOINT.VERIFY_OTP,{userId: location.state.userId, otp: ''+digit1+digit2+digit3+digit4}).then(function(response){
               history.push('/setpassword' , { userId: location.state.userId})
            }).catch(function (error) {
                console.log(error);
            })
        }
    }

    changeFocus(event) {
        if (event.target.value.length) {
            event.target.nextElementSibling.focus()
        }
    }


    componentDidMount() {
        setInterval(() => {
            this.setState((prevState) => ({
                timer: prevState.timer == 0 ? 60 : prevState.timer - 1
            }));
        }, 1000);
    }

    render() {
        return (<div className="OtpScreen">

            <div className="otp-title">
                <p>Verify OTP</p>
            </div>

            <div className="otp-info">
                <p>Please type verification code sent to</p>
                <p>+91 98******80</p>
            </div>
            <div className="otp-box">
                <input className="otp otp-1" type="text" maxLength="1" autoFocus onInput={this.changeFocus} ref={this.otp1}/>
                <input className="otp otp-2" type="text" maxLength="1" onInput={this.changeFocus} ref={this.otp2}/>
                <input className="otp otp-3" type="text" maxLength="1" onInput={this.changeFocus} ref={this.otp3} />
                <input className="otp otp-4" type="text" maxLength="1" ref={this.otp4} />
            </div>

           {/* <Link to="/setpassword">
            <div>
                <Button name="Confirm" clickHandler={this.submitOtp} />
            </div>
        </Link>*/}

            <div>
                <Button name="Confirm" clickHandler={this.submitOtp} />
            </div>


            <div className="resend-otp">
                <span>resend otp in 00:{this.state.timer}</span>
            </div>

            <Link to="/register">
                <div className="go-back">
                    <span> <span>&#10229;</span>Goback </span>
                </div>
            </Link>

        </div>);
    }

}

export default withRouter(OtpScreen);