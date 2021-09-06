import React from "react";
import './register.scss'
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "../lib/Button/Button";
import TextField from "../lib/TextField/TextField";

class Register extends React.Component {

    constructor(props) {
        super(props);

        this.state = { schoolName: '' }

        this.schoolEmail = React.createRef();
        this.phone = React.createRef();
        this.schoolAddress = React.createRef();

        this.registerClick = this.registerClick.bind(this);

        this.setSchoolNmae = this.setSchoolNmae.bind(this);

    }

    setSchoolNmae(schoolName) {
        this.setState({ schoolName: schoolName }, () => {
            console.log(this.state.schoolName);
        });
    }

    registerClick() {
        const { schoolName } = this.state;
        axios.post('/registerSchool', { schoolName: schoolName, email: this.schoolEmail.current.value, phone: this.phone.current.value, schoolAddress: this.schoolAddress.current.value }).then(function () {
            console.log('test');
        });
    }

    render() {
        return (
            <div className="Register">
                <div className="register-title">
                    <p>Register your School</p>
                </div>

                <div className="register-body">
                    <div>
                        <TextField title="School Name" placeholder="Enter Your School Name" autoFocus={true} inputHandler={this.setSchoolNmae} />
                    </div>
                    {/* <div className="form-controls">
                    <label>School Name</label>
                    <div>
                        <input type="text" placeholder="Enter Your School Name" ref={this.schoolName}/>
                    </div>
                </div> */}
                    <div className="form-controls">
                        <label>Email</label>
                        <div>
                            <input type="text" placeholder="Enter your Email" ref={this.schoolEmail} />
                        </div>
                    </div>
                    <div className="form-controls">
                        <label>Phone Number</label>
                        <div>
                            <input type="text" placeholder="Enter Your Phone Number" ref={this.phone} />
                        </div>
                    </div>
                    <div className="form-controls">
                        <label>Address</label>
                        <div>
                            <input type="text" placeholder="Enter Your Address" ref={this.schoolAddress} />
                        </div>
                    </div>
                    <Link to="/verifyotp">
                        <div>
                            <Button name="Register" clickHandler={this.registerClick} />
                        </div>
                    </Link>
                    <div className="no-account">
                        <span>Already have Account?</span><span className="login"><Link to="/">Login</Link></span>
                    </div>

                </div>


            </div>);
    }

}


export default Register;