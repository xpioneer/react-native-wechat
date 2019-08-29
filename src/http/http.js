import { Platform } from 'react-native'
import { HOST, APPNAME, VERSION } from '../config'

/**
 * Http Request
 */
class Http {

  fetch(url, init) {
    // set header
    let headers = new Headers({ 'user-agent': `${APPNAME}${VERSION}` + Platform.OS + Platform.Version })
    for(key in init.headers) {
      headers.append(key, init.headers[key])
    }
    init.headers = headers
    return fetch(HOST + url, init).then(res => {
      const contentType = res.headers.get('content-type')
      if(contentType.includes('application/json')) {
        return res.json();
      } else {
        return res;
      }
    })
  }
  
  get(url, options) {
    options = Object.assign({method: 'get'}, options)
    return this.fetch(url, options)
  }
  
  post(url, data) {
    return this.fetch(url, {
      body: JSON.stringify(data || {}),
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    })
  }

  upload(url, data) {
    return this.fetch(url, {
      body: data,
      method: 'post',
      headers: { 'Content-Type': 'multipart/form-data' }
    })
  }
}

export default new Http()
