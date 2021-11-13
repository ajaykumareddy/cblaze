import React, { Component } from 'react'
import './AdminHome.scss';
import axios from "axios";
import Button from "../../lib/Button/Button";
import ENDPOINT from "../../../config/endpoints";
import { Link, withRouter } from 'react-router-dom';

class AdminHome extends Component {
    constructor(props){
        super(props)
        this.state={
            standardsData:[],
            subjectsData:[],
            isFetching:true,
            isSubSubject:false
        }
        this.standardName = React.createRef();
        this.parentSubject = React.createRef();
        this.subjectName = React.createRef();
        this.isSubSubject = React.createRef();
        this.fetchStandards = this.fetchStandards.bind(this)
        this.fetchSubjects = this.fetchSubjects.bind(this)
        this.addStandards = this.addStandards.bind(this)
        this.addSubjects = this.addSubjects.bind(this)
        this.renderSelectDropdown = this.renderSelectDropdown.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.editStandardHandler = this.editStandardHandler.bind(this)
    }

    componentDidMount() {
        this.fetchStandards();
        this.fetchSubjects();
    }

    renderSelectDropdown(data) {
        let list = [];
        console.log(data)
        let opt = data.map((subject, idx) => {
            console.log(subject)
            if ((subject.subject_parent_id)==null){
                list.push(<option name={subject.name} value={subject.id}>{subject.name}</option>);
            }
        });
        return list;
    }


    fetchStandards = () => {
        this.setState({...this.state, isFetching: true});
        axios.get('/api/admin/standards')
            .then(response => {
                this.setState(previousState => ({
                    standardsData: [...previousState.standardsData].concat(response.data)
                }))})
            .catch(e => {
                console.log(e);
                this.setState({...this.state, isFetching: false});
            });
    };
    fetchSubjects = () => {
        this.setState({...this.state, isFetching: true});
        axios.get('/api/admin/subjects')
            .then(response => {
                this.setState({subjectsData: response.data, isFetching: false})
            })
            .catch(e => {
                console.log(e);
                this.setState({...this.state, isFetching: false});
            });
    };

    //function to update state of standards
    addStandards(e) {
        e.preventDefault();
        let formData = new FormData();
        formData.set('name' , this.standardName.current.value);
        formData.set('system_standard',1)

        axios.post(ENDPOINT.ADMIN.CREATE_SYSTEM_STANDARD,formData).then((response) => {
            this.setState(previousState => ({
                standardsData: [...previousState.standardsData].concat(
                    response.data
                )
            }),() => {
                this.standardName.current.value = '';
            });
        })

    }
    //function to update state of subjects
    addSubjects(e) {
        e.preventDefault();
        let formData = new FormData();

        formData.set('name',this.subjectName.current.value);
        formData.set('system_subject',1);
        if (this.isSubSubject.current.checked){
            formData.set('subject_parent_id',parseInt(this.parentSubject.current.value));
        }        
        axios.post(ENDPOINT.ADMIN.CREATE_SYSTEM_SUBJECTS,formData).then((response)=> {
            let subjectClone = this.state.subjectsData;
            if(response.data.subject_parent_id) {
                // this.state.subjectsData.forEach((subject,index) => {
                //     if(subject.id == response.data.subject_parent_id) {
                //         subjectClone[index].subjects.push(response.data);
                //     }
                //
                // });
                // this.setState({subjectsData : subjectClone});
                this.setState(previousState=>({
                    subjectsData: previousState.subjectsData.map(parentSubject=>
                        parentSubject.id == response.data.subject_parent_id?{...parentSubject,subjects:parentSubject.subjects?[...parentSubject.subjects].concat(response.data):[response.data]}:parentSubject
                    )
                }))

            }else {
                this.setState(previousState => ({
                    subjectsData: [...previousState.subjectsData].concat(
                        response.data
                    )
                }),() => {
                    this.subjectName.current.value = '';
                });
            }

        })

    }
    handleChange(){
        if(this.state.isSubSubject == false){
            this.setState({ isSubSubject: true});
        }
        else{
            this.setState({ isSubSubject: false});
        }

    }
    editStandardHandler(data){
        console.log('hello',data)
        this.props.history.push('/admin/'+data.id);
    }

    render() {

    let {standardsData,subjectsData} = this.state;
    let list = this.renderSelectDropdown(subjectsData);
    return (
        <div className="AdminController">
            <div className="admin-panel"><h3>ADMIN PORTAL</h3></div>
            <div className="admin-container">
                <div className="standards">

                    <div className="admin-title">
                        <h3 className='heading' >Standards</h3>
                    </div>
                    <div className="standard-top-action">
                        <form className="action-form" onSubmit={this.addStandards}>
                            <div className='form-data'>
                                <input className='add-ip text-field' type="text" name="name" ref={this.standardName} />
                                <input className='add-btn button' type="submit" value="add standard" ref={this.isSubSubject}  />
                            </div>
                        </form>
                    </div>
                    <div className="data">
                        {standardsData.map((standard) => {
                            return <div className="standard-row">
                                        <li key={standard.id}>{standard.name}</li>
                                        <div className='edit-img'>
                                            <img  height="20"  width="20" alt="edit"  onClick={()=>{this.editStandardHandler(standard)}} />
                                        </div>
                                    </div>
                        })}

                    </div>
                </div>
                <div className="subjects">
                    <div className="admin-title">
                        <h3 className='heading'>Subjects Available</h3>
                    </div>
                    <div className="standard-top-action">
                        <form className="subjrcts-form" onSubmit={this.addSubjects}>
                            <input  className='text-field-subjects' type="text" name="name" ref={this.subjectName} />
                            <h5>Add Sub-Subjects</h5>
                            <input type='checkbox' defaultChecked={this.state.isSubSubject} name='is-sub-subject' ref={this.isSubSubject} onChange={this.handleChange}/>
                            {this.state.isSubSubject?<select name="Parent Subject"  ref={this.parentSubject}  >
                                {list}
                            </select>:null}
                            <input  className='button-subjects' type="submit" value="add subjects" />
                        </form>
                    </div>
                     <div className="subjects-data">
                         {subjectsData && subjectsData.map((subject) => {
                           return  (<ul className="Parent">
                               <strong>{subject.name}</strong>
                               { subject && subject.subjects && subject.subjects.map((sub) => {
                               return <li className='sub-subjects'>{sub.name}</li>
                                })}
                           </ul>)
                         })}
                     </div>
            </div>
            </div>
        </div>

    )
  }
}
export default withRouter(AdminHome);