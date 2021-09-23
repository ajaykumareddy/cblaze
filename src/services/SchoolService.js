import axios from "axios";
import ENDPOINT from "../config/endpoints";

const SchoolService =  {
    registerSchool: function (data) {
        return axios.post(ENDPOINT.REGISTER, {name : data.name,email: data.email,phone: data.phone,address: data.address});
    }
}

export default SchoolService