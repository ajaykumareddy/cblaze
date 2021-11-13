import React from "react";
import {withRouter} from "react-router-dom";
import './StaffDetails.scss';
import Button from "../lib/Button/Button";
import TextField from "../lib/TextField/TextField";
import Staff from "./Staff";
import NoData from "../NoData/NoData";
import Dialog from "../lib/Dialog/Dialog";
import * as XLSX from 'xlsx';
import DragAndDrop from "../lib/DragAndDrop/DragAndDrop";


class StaffDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [],
            showDialog:false
        };
        this.file = []

        this.createStaff = this.createStaff.bind(this);
        this.searchStaff = this.searchStaff.bind(this);
        this.downloadXlsx = this.downloadXlsx.bind(this)
        this.uploadFile = this.uploadFile.bind(this)
        this.setShowDialog = this.setShowDialog.bind(this)
    }


    createStaff() {
        const { history} = this.props;
        history.push('/school/addStaff');
    }

    searchStaff(searchTxt) {
        let s = this.data.filter( (d) => {
            return d.toLowerCase().includes(searchTxt.toLowerCase());
        });
        this.setState({list: s});
    }

    async downloadXlsx(){
        if (this.state.list.length > 0){
            let wb = XLSX.utils.book_new();
            let ws = XLSX.utils.json_to_sheet(this.state.list);

            XLSX.utils.book_append_sheet(wb, ws, "Staff");
            await XLSX.writeFile(wb, "staffDetails.xlsx");
        }
        else{
            console.log("No Staff records available")
        }
    }

    uploadFile(){
            new Promise((resolve,reject)=>{
                const fileReader = new FileReader()
                fileReader.readAsArrayBuffer(this.file)

                fileReader.onload=(e)=>{
                    const bufferArray = e.target.result;
                    const workBook = XLSX.read(bufferArray,{type:'buffer'});
                    const wsname = workBook.SheetNames[0];
                    const workSheet = workBook.Sheets[wsname]
                    const sheetToJSONData = XLSX.utils.sheet_to_json(workSheet);
                    resolve(sheetToJSONData);
                };
                fileReader.onerror = (error) =>{
                    reject(error);
                }
            }).then((fileData)=>{
                this.setState({list:fileData})
                this.setState({showDialog:!this.state.showDialog})
            }).catch((error) => {
                console.log(error)
            })
    }
    setShowDialog(){
        this.setState({showDialog:!this.state.showDialog})
    }


    render() {
        let {list} = this.state;
        return <div className="StaffDetails">
                    <div className="staff-header">
                        <div className="staff-header-title">
                            <h3>Staff Details</h3>
                        </div>
                        <div className="staff-header-options">
                            { list && list.length > 0 &&
                            <React.Fragment>
                               <div className="search-box"> <TextField type="search" placeholder="Search Staff" inputHandler={this.searchStaff}/></div>
                               <div className="no-color" >
                                   <Button name="Basic Reports" />
                               </div>
                            </React.Fragment>
                            }

                            <div className={"btn btn-hvr"}>
                                <Button name="Download/Import" clickHandler={this.showDropDownOptions}/>
                                {
                                    <div className={"drp-down"}>
                                        <ul className={"dropdown-container"}>
                                            <li className={"dropdown-list"} onClick={this.setShowDialog}>Upload</li>
                                            <li className={"dropdown-list"} onClick={this.downloadXlsx}>Download</li>
                                        </ul>
                                    </div>
                                }
                            </div>
                            <div>
                                <Button name="Create New" clickHandler={this.createStaff} />
                            </div>
                        </div>
                    </div>
                    <div className="staff-body">
                        {list && list.length === 0 && <NoData />}

                        <div className="staff-category">
                            <span>Non Tech Staff</span>
                            <span className="active">Technical Staff</span>
                        </div>
                        <div className="staff-data">
                            <table>
                                <thead>
                                <tr>
                                    <th>S No</th>
                                    <th>Employee Id</th>
                                    <th>Name</th>
                                    <th>Gender</th>
                                    <th>Designation</th>
                                    <th>Phone Number</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <Staff data={this.state.list}/>
                                </tbody>
                            </table>

                        </div>
                    </div>
            {this.state.showDialog?<Dialog closeHandler={() => {this.setShowDialog(false)}}>
                <div className={"dialog-container"}>
                    <div className={"dailog-header"}>
                        <h3>Upload File</h3>
                    </div><hr/>
                    <div>
                        <input type="file" onChange={(e)=>{
                            this.file = e.target.files[0]
                        }}/>
                    </div>
                    <DragAndDrop/>
                    <div>
                        <Button name={"Submit"} clickHandler={ this.uploadFile}/>
                    </div>
                </div>
            </Dialog>:null}
            </div>
    }
}

export default withRouter(StaffDetails);
