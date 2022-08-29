import axios from "axios";

export const BASE_URL = "http://10.103.0.15/cs63/s15/Local/Backend/";

// http://10.103.0.15/cs63/s15/Local/Backend/swagger/index.html 
  
export default axios.create({
  baseURL: BASE_URL,
  headers: { 
    "Content-Type": "multipart/form-data",
  },
});
