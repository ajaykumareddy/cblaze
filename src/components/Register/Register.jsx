import React from "react";
import './register.scss'
import axios from "axios";
import { Link, withRouter} from "react-router-dom";
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
            window.sessionStorage.setItem('token' , response.data.token.access_token)
            history.push('/verifyotp', {userId: response.data.user.id});
        }).catch(function (error) {
            console.log(error);
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
                        <TextField title="School Name" placeholder="Enter Your School Name" autoFocus={true} inputHandler={this.setSchoolName} />
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
                    {/*<Link to="/verifyotp">
                        <div>
                            <Button name="Register" clickHandler={this.registerClick} />
                        </div>
                    </Link>*/}

                        <div>
                            <Button name="Register" clickHandler={this.registerClick} />
                        </div>

                    <div className="no-account">
                        <span>Already have Account?</span><span className="login"><Link to="/">Login</Link></span>
                    </div>
                </div>
            </div>);
    }
}
export default withRouter(Register);