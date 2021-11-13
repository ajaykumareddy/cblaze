import React from "react";
import './Header.scss';
import logo from "../../assets/icons/Logohead.svg";
import AuthService from "../../services/AuthService";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    logout() {
        AuthService.logout()
    }


    render() {
        return (<div className="Header">
                    <div className="logo-box">
                        <img src={logo}  alt="logo" />
                    </div>
                    <div className="profile-box">
                        <div>
                            <button onClick={this.logout()}>LOGOUT</button>
                        </div>
                        <div className="profile-img">
                            <img src="https://www.w3schools.com/howto/img_avatar.png"  alt="profile-image"/>
                        </div>
                        <div className="profile-email">
                            test@test.com
                        </div>
                    </div>
                </div>);
    }
}

export default Header;