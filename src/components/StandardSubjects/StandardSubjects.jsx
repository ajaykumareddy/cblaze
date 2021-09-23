import React from "react";
import './StandardSubjects.scss';

class StandardSubjects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        console.log('test');
    }

    render() {
        return <div className="Subject">
                    <div className="modal-header">
                        <h3>11 Standard (pure Science)</h3>
                    </div>

                    <div className="modal-content">
                        <div className="table">
                            <ul className="tableHeader">
                                <li>S No</li>
                                <li>Subjets</li>
                                <li>Active</li>
                                <li>Add SubCategory</li>
                            </ul>

                            <div className="tableBody">
                                <ul>
                                    <li>1</li>
                                    <li>Sciente I</li>
                                    <li></li>
                                    <li>
                                        <img src="add.svg" width="20" alt="Add" />
                                    </li>
                                </ul>
                                <div className="subTable">
                                    <ul>
                                        <li></li>
                                        <li>Physics</li>
                                        <li>
                                            <div className="slider-container">
                                                <input type="checkbox" />
                                                    <div className="toggle-switch"></div>
                                            </div>
                                        </li>
                                        <li></li>
                                    </ul>
                                    <ul>
                                        <li></li>
                                        <li>Chemistry</li>
                                        <li>
                                            <div className="slider-container">
                                                <input type="checkbox" />
                                                    <div className="toggle-switch"></div>
                                            </div>
                                        </li>
                                        <li></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="tableBody">
                                <ul>
                                    <li>2</li>
                                    <li>Sciente II</li>
                                    <li></li>
                                    <li>
                                        <img src="add.svg" width="20" alt="Add" />
                                    </li>
                                </ul>
                            </div>
                            <ul className="tableBody">
                                <li>3</li>
                                <li>Language I</li>
                                <li></li>
                                <li>
                                    <img src="add.svg" width="20" alt="Add" />
                                </li>
                            </ul>
                            <ul className="tableBody">
                                <li>4</li>
                                <li>Language II</li>
                                <li></li>
                                <li>
                                    <img src="add.svg" width="20" alt="Add" />
                                </li>
                            </ul>
                            <ul className="tableBody">
                                <li>5</li>
                                <li>Language III</li>
                                <li></li>
                                <li>
                                    <img src="add.svg" width="20" alt="Add" />
                                </li>
                            </ul>
                        </div>

                        <div className="btns">
                            <button className="btnOutline">Add StandardSubjects</button>
                            <button className="btnFill">Save</button>
                        </div>
                    </div>

        </div>
    }
}


export default StandardSubjects;