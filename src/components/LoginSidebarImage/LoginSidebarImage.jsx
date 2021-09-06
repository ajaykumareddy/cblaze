import React from "react";

class LoginSidebarImage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (<div className="LoginSidebarImage">
            <div className="sidemenu">

            </div>
            <div>
                <img width="50" height="50" alt="" src={this.props.src} />
            </div>

        </div>)

    }

}

export default LoginSidebarImage;