import axios from "axios";

export const request = (url, method, data) => {
    return axios({
      url,
      method,
      data,
    });
  };