import axios from "axios";

const axiosInstance = axios.create({
  //local instance of firebase function
  //baseURL: "http://127.0.0.1:5001/clone-d0df7/us-central1/api",
  //deployed instance of amazon server on render.com
  baseURL: "https://amazon-api-deploy-02y5.onrender.com/",
});
export { axiosInstance };


