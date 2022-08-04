import axios from 'axios';
import { removeAccessToken, getAccessToken } from '../utils/manageAccessToken';
import domainConfig from '../utils/domainConfig';

export default function API(method, endPoint, data) {
  return axios({
    method: method,
    url: domainConfig.BACK_END_URL + endPoint,
    headers: {
      Authorization: `Bearer ${getAccessToken()}`
    },
    data: data,
    params: data && data.params ? data.params : null
  })
    .then(function (response) {
      return response;
    })
    .catch((error) => {
      if (error.response.status === 401) {
        alert('Session expired! Please, Login again.');
        removeAccessToken();
        window.location.href = `/login`;
        return false;
      } else {
        throw error.response;
      }
    });
}

export { API };
