import axios from "axios";
import ENDPOINT from "../config/endpoints";

const SchoolStandardsService = {
    getSchoolStandards(){
        return axios.get(ENDPOINT.GET_SCHOOL_STANDARDS)
    },

    addNewStandards(newStandardName){
        return axios.post(ENDPOINT.ADD_NEW_STANDARDS,{name:newStandardName,system_standard:0});
    }
}

export default SchoolStandardsService;