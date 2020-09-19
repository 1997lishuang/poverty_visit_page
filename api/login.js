import request from '@/utils/request'
import qs from 'qs'


export default {

  login(username, password) {
    return request({
      url: `/jzfp/login`,
      method: 'post',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      withCredentials: true,
      data: qs.stringify({ username: username,password:password })
    })
  },
  login2(username, password) {
    return request({
      url: `http://machaoyin.top:8080/jzfp/login2?username=${username}&password=${password}`,
      method: 'get'
    })
  }

}

