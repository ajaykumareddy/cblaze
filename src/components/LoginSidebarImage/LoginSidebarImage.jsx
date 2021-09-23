import React from "react";
import './LoginSidevarImage.scss';

class LoginSidebarImage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {active} = this.props;
        const className = 'LoginSidebarImage ' + (active ? 'active' : '');
        return (<div className={className}>

            <div>
                <img width="50" height="50" alt="" src={this.props.src} />

               <p>School</p>
            </div>



        </div>)

    }

}

export default LoginSidebarImage;