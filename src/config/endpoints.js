const ENDPOINT = {
    REFRESH_TOKEN: 'api/auth/refresh',
    REGISTER_SCHOOL : '/api/school/register',
    LOGIN: '/api/auth/login',
    LOGOUT: '/api/auth/logout',
    VERIFY_OTP: '/api/verifyotp',
    SET_PASSWORD: '/api/setPassword',
    SCHOOL_DETAILS: '/api/auth/school/details',
    ADD_NEW_STANDARDS: '/api/admin/standards',
    GET_SCHOOL_STANDARDS: '/api/admin/standards',
    STANDARDS_FETCH_API:'/api/admin/standards',
    SET_SCHOOL_LOGO:'/api/school_logo',
    ADMIN: {
        CREATE_SYSTEM_STANDARD: '/api/admin/standards',
        CREATE_SYSTEM_SUBJECTS: '/api/admin/subjects',
        CREATE_STANDARD_SECTIONS: '/api/admin/standard_sections'
    }
    }
export default ENDPOINT;