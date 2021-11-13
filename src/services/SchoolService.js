import axios from "axios";
import ENDPOINT from "../config/endpoints";

const SchoolService =  {
    registerSchool: function (data) {
        return axios.post(ENDPOINT.REGISTER_SCHOOL, {name : data.name,email: data.email,phone: data.phone,address: data.address});
    },
    getSchoolDetails: function (schoolId) {
        return axios.get(ENDPOINT.SCHOOL_DETAILS,{params: {id : schoolId }});
    },
    updateSchoolDetails: function (schoolId,data) {
        return axios.put(ENDPOINT.SCHOOL_DETAILS,
            {name : data.name,email: data.email,phone: data.phone,address: data.address, city:data.city, country:data.country, state:data.state},{params: {id: schoolId}} );
    },
    updateSchoolLogo: function(schoolId,data){
        return axios.post(ENDPOINT.SET_SCHOOL_LOGO,{file:data},{
            headers: {
                'content-type': 'multipart/form-data'
            },
            params:{id:schoolId}
        });
    },
}

export default SchoolService