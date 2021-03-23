
import { LOGIN, SIGNUP } from '../config/url';
import { apiDelete, apiGet, apiPost, apiPut, setUserData } from '../utils/Utils';




export function login(data = {}) {
   

  return apiPost(LOGIN, data);

}

export function signup(data = {}) {
    //  alert(JSON.stringify(data))
   return new Promise((resolve,reject) => {
     apiPost(SIGNUP,data).then(res=>{
       setUserData(res.data);
       resolve(res);

     }).catch(error=>{
       reject(error);
     })
   })
  }
