import axios from "axios";

const client = axios.create({
  //baseURL: "https://gelposserver.herokuapp.com/",
});

// client.defaults.baseURL = "https://gelposserver.herokuapp.com/";

// client.defaults.headers.common["Authorization"] = "Bearer a1b2c3d4";

// axios.intercepter.response.use(
//   (resposne) => {
//     return resposne;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );

export default client;
