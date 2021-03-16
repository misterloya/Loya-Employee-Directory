
import axios from "axios";

export const API = {
  getEmployee() {

    return axios.get("https://randomuser.me/api/?results=50");
    // http client, allows us to make http requests
  }

} 

