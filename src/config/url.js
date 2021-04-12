// const API_BASE_URL = 'http://192.168.99.194:8002';

// const getApiUrl = (endpoint) => API_BASE_URL + endpoint;

// export const LOGIN = getApiUrl('/user/loginUser');
// export const SIGNUP = getApiUrl('/user/registerUser');
// export const UPLOAD_IMAGE = getApiUrl('/common/uploadFile');


const API_BASE_URL = ' https://api.talktier.com';

const getApiUrl = (endpoint) => API_BASE_URL + endpoint;



// function getApiUrl(endpoint) {
//     return `${API_BASE_URL} ${endpoint}`
// }


export const LOGIN_OTP = getApiUrl('/user/v1/loginSignupOtp');
export const VERIFY_OTP = getApiUrl('/user/v1/verifyOtp');
export const USER_SEARCH = getApiUrl('/user/v1/getUserSearch');
export const USER_NEAR_ME = getApiUrl('/user/v1/getUserNearMe?name=');
export const USER_LOCATION = getApiUrl('/user/v1/getUserNearMe');
export const GET_CONVERSATION_MESSAGES  = getApiUrl('/user/v1/getAllConversations');
export const    GET_INDIVIDUAL_MESSAGES  = getApiUrl('/user/v1/getConversationMessages');


