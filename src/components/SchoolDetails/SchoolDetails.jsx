import React from "react";
import './SchoolDetails.scss';
import {withTranslation} from "react-i18next";
import TextField from "../lib/TextField/TextField";
import SelectField from "../lib/SelectField/SelectField";

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
            address:''
        }
        this.setCountry = this.setCountry.bind(this);
        this.setSchoolName = this.setSchoolName.bind(this);
    }

    setCountry(country) {
        this.setState({country});
    }

    setSchoolName(name) {
        this.setState({name});
    }

    render() {
        const {t} = this.props;
        const {name,country,city,state,address,phone,email} = this.state;
        return <div className="SchoolDetails">
            <div className="school-details">
                <div className="title-header">
                    <div className="title">{t('SCHOOL.DETAILS')}</div>
                    <div className="school-helptext">Info about School</div>
                </div>

                <div className="school-details-body">
                    <div>
                        <TextField title={t('SCHOOL.NAME')} placeholder={t('SCHOOL.PLACEHOLDER.NAME')} autoFocus={true} inputHandler={this.setSchoolName} value={name} />
                    </div>
                    <div>
                        <SelectField title={t('COUNTRY')} list="country" placeholder={t('PLACEHOLDER.COUNTRY')} inputHandler={this.setCountry} value={country} options={['India']} />
                    </div>
                    <div>
                        <SelectField title={t('STATE')} list="state" placeholder={t('PLACEHOLDER.STATE')} inputHandler={this.setCountry} value={state} options={['Tamil Nadu']} />
                    </div>
                    <div>
                        <SelectField title={t('CITY')} list="city" placeholder={t('PLACEHOLDER.CITY')} inputHandler={this.setCountry} value={city} options={['Chennai']} />
                    </div>

                    <div>
                        <TextField title={t('PHONR')} placeholder={t('PLACEHOLDER.PHONE')} autoFocus={true} inputHandler={this.setSchoolName} value={phone} />
                    </div>
                    <div>
                        <TextField title={t('EMAIL')} placeholder={t('PLACEHOLDER.EMAIL')} autoFocus={true} inputHandler={this.setSchoolName} value={email} />
                    </div>
                    <div>
                        <TextField title={t('ADDRESS')} placeholder={t('PLACEHOLDER.ADDRESS')} autoFocus={true} inputHandler={this.setSchoolName} value={address} />
                    </div>
                </div>
            </div>
        </div>
    }
}

export default withTranslation()(SchoolDetails);