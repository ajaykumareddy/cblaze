import React from "react";
import './Test.scss';
import logo from '../../assets/icons/Logohead.svg';
import SchoolProfile from '../../assets/icons/fa-regular_registered.svg';
import admissionDetails from '../../assets/icons/clarity_form-line.svg';
import staffDetails from '../../assets/icons/ph_chalkboard-teacher.svg';
import Button from "../lib/Button/Button";
import axios from "axios";

class Test extends React.Component {


    constructor(props) {
        super(props);

        this.createSystemStandard = this.createSystemStandard.bind(this);
        this.standardName = React.createRef();
    }

    createSystemStandard(event) {
        event.preventDefault();
        axios.post('/api/admin/standards', {name:  this.standardName.current.value,system_standard: 1}).then(function (response) {
            console.log(response)
        });
    }


    render() {
        return (
            <div className="Test">
                <form method="post" onSubmit={this.createSystemStandard}>
                    <label for="standard_name"> Standard Name </label>
                    <input type="text" name="name" ref={this.standardName}/>
                    <input type="submit" value="Create Standard" />
                </form>
            </div>
        );
    }
}

export default Test;