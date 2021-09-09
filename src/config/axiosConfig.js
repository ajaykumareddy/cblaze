import axios from "axios";

axios.defaults.baseURL = 'http://192.168.3.169:8000/';
axios.interceptors.request.use(function (config) {
    // Do something before request is sent

    if(window.sessionStorage.getItem('token').length != 0) {
        config.headers.Authorization = "Bearer " + window.sessionStorage.getItem('token');
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});