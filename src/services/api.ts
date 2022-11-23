import axios, { AxiosError } from "axios";

interface error {
  config: any;
  message: string;
}
const api: any = axios.create({
  baseURL: "http://localhost:3333",
});

api.interceptors.response.use(undefined, (error: error) => {
  const { config, message } = error;
  if (!config || !config.retry) {
    return Promise.reject(error);
  }

  if (!(message.includes("timeout") || message.includes("Network Error"))) {
    return Promise.reject(error);
  }
  config.retry -= 1;
  const delayRetryRequest = new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, config.retryDelay || 1000);
  });

  return delayRetryRequest.then(() => axios(config));
});

export default api;
