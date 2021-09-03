import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
let BACKEND_URL = `${process.env.REACT_APP_BACKEND_IP}`;

const client = axios.create({
  baseURL: BACKEND_URL,
  withCredentials: true,
  responseType: 'json',
});

client.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    console.log(`URL: ${config.url}`);
    // console.log(`PARAMETERS: ${JSON.stringify(config.params)}`);
    // TODO AXIOS 요청 성공 직전 호출. axios 설정.
    console.log(config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

client.interceptors.response.use(
  (response: AxiosResponse) => {
    /*
     HTTP STATUS === 200, 응답 성공 직전 호출.
   */
    console.log(response);
    // console.log(`RESPONSE CODE: ${response.data.code}`);
    return response;
  },
  (error) => {
    /*
    HTTP STATUS !== 200, 응답 에러 직전 호출
   */
    console.warn(error.toString());
    return Promise.reject(error);
  },
);

export default client;
