import url from './url'
import Qs from 'qs'
export const logins = data => axios.post(
  `${url.url}/s_user/login`,
  Qs.stringify(data)
)