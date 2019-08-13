import {
  post,
  get,
  patch,
  put
} from './http'

import host from './config'

let api={
    getHomeData: params => get(`${host}/r/newest/1.do`, {
      ...params
    })
}

export default api