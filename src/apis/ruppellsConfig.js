import axios from "axios";

// const URI = "https://api-staging-ebd6c12f.ruppellssolutions.com/api/v1"     // Demo
const URI = "https://api.ruppellssolutions.com/api/v1"; // Live

const ruppellsConfig = axios.create({
  baseURL: URI,
});

ruppellsConfig.interceptors.request.use(
  (request) => {
    // modify request if needed
    return request;
  },
  (error) => {
    // modify error if needed
    return error;
  }
);

export default ruppellsConfig;
