import axios from "axios";
import ENDPOINT from "../config/endpoints";


const AuthService = {
    isLoggedIn : false,
    login: function (data) {
        return axios.post(ENDPOINT.LOGIN,{email: data.email,password: data.password});
    },
    setAccessToken: function (token) {
        this.isLoggedIn = true;
        window.localStorage.setItem('token',token);
    },
    updateAccessToken:function (token) {
        axios.post(ENDPOINT.REGISTER,{}).then(function (token) {
            window.localStorage.setItem('token',token);
        })
    },
    logout: function () {
        axios.post(ENDPOINT.LOGOUT,{}).then(function (response) {
            window.localStorage.removeItem('token');
            console.log(response);
        })
    }
}

export default AuthService;