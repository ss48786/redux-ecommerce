import { LOGIN, SIGNUP } from '../../config/url';

import { apiDelete, apiGet, apiPost, apiPut, setUserData } from '../../utils/Utils';
export function getUserProfile(query) {
  return apiGet(LOGIN + query);
}