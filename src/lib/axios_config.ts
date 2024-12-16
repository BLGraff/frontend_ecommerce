import Axios from "axios";
import { userManager } from "./oidc_config";

export const initAxiosInterceptors = () => {
  Axios.interceptors.request.use(async (config) => {
    const user = await userManager.getUser();

    if (user && user.access_token) {
      config.headers.Authorization = `Bearer ${user.access_token}`;
    }

    return config;
  });

  Axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};
