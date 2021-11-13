import React, {Component} from 'react';
import axios from "axios";
import queryString from 'query-string';
import {withRouter} from 'react-router';
import ENDPOINT from "../../../config/endpoints";

class AdminSchoolStandardsInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            standardSections:[],
            subjectsData:[],
            standardSubjects:[],
        }
        this.editName=''
        this.sectionName = React.createRef()
        this.subject = React.createRef()
        this.editSectionName = React.createRef()
        this.fetchStandardSectionsData = this.fetchStandardSectionsData.bind(this)
        this.fetchStandardSubjectData = this.fetchStandardSubjectData.bind(this)
        this.addSections = this.addSections.bind(this)
        this.renderSubjectsSelectDropdown = this.renderSubjectsSelectDropdown.bind(this)
        this.addSubjects = this.addSubjects.bind(this)
        this.getSubjectName = this.getSubjectName.bind(this)
        this.editMenu = this.editMenu.bind(this)

    }
    componentDidMount() {
        this.fetchStandardSectionsData();
        this.fetchStandardSubjectData();
    }
    fetchStandardSectionsData = () => {
        // axios.get(ENDPOINT.ADMIN.CREATE_SYSTEM_SUBJECTS).then((response)=>{
        //
        // }).catch((e)=>{
        //     console.log(e)
        // })
        this.setState((previousState)=>({
            standardSections:[...previousState.standardSections].concat(
                {
                    name: 'sec-A',
                    standard_id:this.props.match.params.id
                //    response.data
                }
            )
        }))
    };

    fetchStandardSubjectData = () => {
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

    addSections(e){
        console.log('iamhere')
        e.preventDefault();
        let formData = new FormData();
        formData.set('name' , this.sectionName.current.value);
        formData.set('standard_id',this.props.match.params.id)

        // axios.post(ENDPOINT.ADMIN.CREATE_SYSTEM_SUBJECTS,formdata)
        if(this.sectionName.current.value.length>0){

            this.setState((previousState)=>({
                standardSections:[...previousState.standardSections].concat(
                    {
                        name: this.sectionName.current.value,
                        standard_id:this.props.match.params.id
                    }
                )
            }),() => {
                this.sectionName.current.value = '';
            })
        }
        else{
            alert('section name cant be empty')
        }
        console.log(this.state.standardSections)
    }

    getSubjectName=function(subjectId){
        var subjectName =''
        for(let subjects=0;subjects<this.state.subjectsData.length;subjects++){
            if(this.state.subjectsData[subjects].id===subjectId){
                subjectName += this.state.subjectsData[subjects].name;
                break;
            }
        }
        return subjectName
    }

    addSubjects(e){
        e.preventDefault();
        console.log(e.target.value)
        var subjectID = parseInt(this.subject.current.value)
        let formData = new FormData();
        let subjectName = this.getSubjectName(subjectID);
        formData.set('subject_id' , subjectID);
        formData.set('standard_id',this.props.match.params.id)
        // axios.post(ENDPOINT.ADMIN.CREATE_SYSTEM_SUBJECTS,formData)
        this.setState((previousState)=>({
            standardSubjects:[...previousState.standardSubjects].concat(
                {
                    subject_name:subjectName,
                    subject_id: subjectID,
                    standard_id: this.props.match.params.id
                }
            )
        }))
    }


    renderSubjectsSelectDropdown(data) {
        let list = [];
        let opt = data.map((subject, idx) => {
            if ((subject.subject_parent_id)==null){
                list.push(<option name={subject.id} value={subject.id}>{subject.name}</option>);
            }
        });
        return list;
    }

    editMenu(data,event){
        event.preventDefault();
        this.editSectionName.current.value=data.name
        console.log(this.standardSections)
        this.editName=data.name
    }
    editSections(e){
        e.preventDefault();
        const newSectionName = this.editSectionName.current.value
        this.setState(previousState=>({
            standardSections: previousState.standardSections.map(section=>
                section.name===this.editName?{...section,name:newSectionName}:section
            )
        }))
        this.editSectionName.current.value=''
    }


    render() {
        let {standardSections,subjectsData} = this.state;
        let list = this.renderSubjectsSelectDropdown(subjectsData);
        return (
            <div className='container'>
                    <div className='sections-info'>
                        sections
                        <div className='section-names'>
                            {this.state.standardSections.map((sections)=>{
                                return <li>{sections.name} <button onClick={this.editMenu.bind(this,sections)} >edit</button>
                                </li>
                            })}
                        </div>
                        <div>
                            <form onSubmit={this.addSections}>
                                <input type="text" name="sectionName" ref={this.sectionName} />
                                <input type="submit" value="Add Sections"  />
                            </form>
                        </div>
                        <div>
                            <form onSubmit={this.editSections.bind(this)}>
                                <input type="text" name="editSectionName" ref={this.editSectionName} />
                                <input type="submit" value="Edit Sections"  />
                            </form>
                        </div>
                    </div>

                    <div className='subjects-info'>
                        subjects
                        <div className='subject-names'>
                            {this.state.standardSubjects.map((subjects)=>{
                                return <li>{subjects.subject_name}</li>
                            })}
                        </div>
                        <div>
                            <form onSubmit={this.addSubjects}>
                                {<select name="subject"  ref={this.subject}  >
                                    {list}
                                </select>}
                                <input type="submit" value="add subjects" />
                            </form>
                        </div>
                    </div>
            </div>
        );
    }
}
export default withRouter(AdminSchoolStandardsInfo);

class Edit extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return <div>hello</div>
    }
}