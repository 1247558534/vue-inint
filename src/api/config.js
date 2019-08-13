

let dev_url = '/apis'
let prod_url = 'http://ring.51app.cn/'
let host = process.env.NODE_ENV == 'production'?prod_url:dev_url


export default host