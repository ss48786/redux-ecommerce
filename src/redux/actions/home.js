// import { LOGIN, SIGNUP } from '../../config/url';

// import { apiDelete, apiGet, apiPost, apiPut, setUserData } from '../../utils/Utils';
// export function getUserProfile(query) {
//   return apiGet(LOGIN + query);
// }

import { reject } from 'lodash';
import {GET_CONVERSATION_MESSAGES} from "../../config/url";
import { apiDelete, apiGet, apiPost, apiPut, setUserData } from '../../utils/Utils';
import store from '../store';
import types from '../types';
const {dispatch} = store ;


export function GetConversation(limit,headers={}) {
  let query =`?limit=${limit} &skip=0`;
 
 return apiGet(GET_CONVERSATION_MESSAGES,headers )
  }