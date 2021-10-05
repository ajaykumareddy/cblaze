import React from "react";
import Dialog from "../lib/Dialog/Dialog";
import StandardSubjects from "../StandardSubjects/StandardSubjects";


class Standard extends React.Component {

    constructor() {
        super();
        this.state = {
            showDialog: false
        };
    }

    setShowDialog(b) {
        this.setState({showDialog: b});
    }


    render() {
        return (
            <div>
                <div className="standard-details">
                    <div className="section-header">
                        <div className="title">Choose the Standard available in school</div>
                        <button className="add-standard">+Add Standard</button>
                    </div>
                    <div className="area-1">
                        <table>
                            <thead>
                            <tr>
                                <th>S.NO</th>
                                <th>Standard</th>
                                <th>Sections</th>
                                <th>Subjects</th>
                                <th>active</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>

                                <td>1</td>
                                <td>First</td>
                                <td>A,B,C,D</td>
                                <td>English,Telugu,Hindi</td>
                                <td>
                                    <div className="slider-container">
                                        <input type="checkbox"   />
                                        <div className="toggle-switch"></div>
                                    </div>
                                </td>
                                <td onClick={() => {this.setShowDialog(true);}}>-</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>


                </div>
                {this.state.showDialog ? <Dialog closeHandler={() => {this.setShowDialog(false)}}> <StandardSubjects /></Dialog> : ''}
            </div>
        );
    }
}

export default Standard;