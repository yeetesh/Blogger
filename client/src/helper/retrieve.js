const axios = require("axios");
axios.defaults.withCredentials = true;

module.exports = {
  getData(url) {
    return axios.get(url);
  },

  postData(url, data) {
    return axios.post(
      url,
      data,
      (headers = {
        "Content-Type": "application/x-www-form-urlencoded"
      })
    );
  }
};
