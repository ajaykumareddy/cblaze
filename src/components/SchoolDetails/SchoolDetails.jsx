import React from "react";
import './SchoolDetails.scss';
import {withTranslation} from "react-i18next";
import TextField from "../lib/TextField/TextField";
import SelectField from "../lib/SelectField/SelectField";
import SchoolService from "../../services/SchoolService";
import Button from "../lib/Button/Button";

class SchoolDetails extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            country: '',
            state: '',
            city: '',
            phone:'',
            email:'',
            address:'',
            schoolLogo:''
        }
        this.setCountry = this.setCountry.bind(this);
        this.setSchoolName = this.setSchoolName.bind(this);
        this.setStateName = this.setStateName.bind(this);
        this.setCity = this.setCity.bind(this);
        this.setPhone = this.setPhone.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setAddress = this.setAddress.bind(this);
        this.updateSchoolDetails = this.updateSchoolDetails.bind(this);
        this.onFileChange = this.onFileChange.bind(this);
    }

    componentDidMount() {
        var self = this;
        SchoolService.getSchoolDetails(window.localStorage.getItem('schoolId')).then(function (response) {
            let data = response.data;
            self.setState({name: data.name,country: data.country,state: data.state,city: data.city,phone: data.phone,email: data.email,address: data.address});
        });
    }

    setCountry(country) {
        this.setState({country: country});
    }

    setSchoolName(name) {
        this.setState({name: name});
    }

    setStateName(state) {
        this.setState({state: state});
    }

    setCity(city) {
        this.setState({city: city});
    }

    setPhone(phone) {
        this.setState({phone: phone});
    }

    setEmail(email) {
        this.setState({email: email});
    }

    setAddress(address) {
        this.setState({address: address});
    }
    onFileChange(event){
        const formData = new FormData();
        formData.set('file', event.target.files[0]);
        const [file] = document.querySelector('#logo').files
        this.setState({schoolLogo:formData})
        if (file) {
            document.querySelector('#schoolLogo').src = URL.createObjectURL(file)
        }
    }


    async updateSchoolDetails() {

       await Promise.all([
           SchoolService.updateSchoolDetails(window.localStorage.getItem('schoolId'),this.state).then(function (response) {

           }).catch(function (error) {

           }),
           SchoolService.updateSchoolLogo(window.localStorage.getItem('schoolId'),this.state.schoolLogo).then(function (response){

           }).catch(function (error){

           })
       ])
    }


    render() {
        const {t} = this.props;
        const {name,country,city,state,address,phone,email} = this.state;
        return <div className="SchoolDetails">
            <div className="title-header">
                <div className="title">{t('SCHOOL.DETAILS')}</div>
                <div className="school-helptext">Info about School</div>
            </div>
            <div className="school-details">
                <div className="school-details-body">
                    <div>
                        <TextField title={t('SCHOOL.NAME')} placeholder={t('SCHOOL.PLACEHOLDER.NAME')} autoFocus={true} inputHandler={this.setSchoolName} value={name} />
                    </div>
                    <div>
                        <SelectField title={t('COUNTRY')} list="country" placeholder={t('PLACEHOLDER.COUNTRY')} inputHandler={this.setCountry} value={country} options={['India']} />
                    </div>
                    <div>
                        <SelectField title={t('STATE')} list="state" placeholder={t('PLACEHOLDER.STATE')} inputHandler={this.setStateName} value={state} options={['Tamil Nadu']} />
                    </div>
                    <div>
                        <SelectField title={t('CITY')} list="city" placeholder={t('PLACEHOLDER.CITY')} inputHandler={this.setCity} value={city} options={['Chennai']} />
                    </div>

                    <div>
                        <TextField title={t('PHONE')} type="number" placeholder={t('PLACEHOLDER.PHONE')} autoFocus={true} inputHandler={this.setPhone} value={phone} />
                    </div>
                    <div>
                        <TextField title={t('EMAIL')} placeholder={t('PLACEHOLDER.EMAIL')} autoFocus={true} inputHandler={this.setEmail} value={email} disabled={true}/>
                    </div>
                    <div>
                        <TextField title={t('ADDRESS')} placeholder={t('PLACEHOLDER.ADDRESS')} autoFocus={true} inputHandler={this.setAddress} value={address} />
                    </div>
                </div>
                <div className="school-logo-box">

                        <label htmlFor="logo" className="btn">Select Image</label>
                        <input accept="image/png" type="file" id="logo" className="logo-default-button" onChange={this.onFileChange} />
                        <img width="220" height="220" id="schoolLogo"  src="#" alt="school image" />

                </div>
            </div>
            <div className="school-details-save">
                <Button name="Save"  clickHandler={this.updateSchoolDetails}/>
            </div>
        </div>
    }
}

export default withTranslation()(SchoolDetails);