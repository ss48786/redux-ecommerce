
import { LOGIN_OTP , VERIFY_OTP  } from '../../config/url';

import { apiDelete, apiGet, apiPost, apiPut, setUserData } from '../../utils/Utils';
import store from '../store';
import types from '../types';
const {dispatch} = store ;




export function login(data = {}) {
   

  return apiPost(LOGIN, data);

}

// export function signup(data = {}) {
//     //  alert(JSON.stringify(data))
//    return new Promise((resolve,reject) => {
//      apiPost(SIGNUP,data).then(res=>{
//        setUserData(res.data);
//        resolve(res);

//      }).catch(error=>{
//        reject(error);
//      })
//    })
//   }


  export function onSendOTP(data = {}) {
 
   return new Promise((resolve,reject) => {
     apiPost(LOGIN_OTP,data).then(res=>{
       
       resolve(res);

     }).catch(error=>{
       reject(error);
     })
   })
  }



  export function onVerifyOTP(data = {}) {
  
   return new Promise((resolve,reject) => {
     apiPost(VERIFY_OTP,data).then(res=>{
      setUserData(res.data).then(suc => {
        dispatch({
          type:types.LOGGED_IN ,
          payload:res.data
        })
      })
       resolve(res);

     }).catch(error=>{
       reject(error);
     })
   })
  }