import axios from "axios";
import qs from "qs";

export default function (method, url, params = {}) {
    let httpConfig = {
        baseURL: process.env.NODE_ENV === "production" ? "/api/v1" : "http://www.laravel.local/api/v1",
        method: method,
        url: url,
        data: qs.stringify(params),
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
            // 'Authorization': Cookies.get('token') ? Utils.decodeEntities(Cookies.get('token')) : ''
        },
    }
    return new Promise((resolve, reject) => {
        axios(httpConfig).then((res) => {
            return resolve(res.data)
        }).catch((response) => {
            reject(response)
        })
    })
}