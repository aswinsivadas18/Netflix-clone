import axios from "axios"
import {baseUrl} from '../Constrant/Constrants'

const instance = axios.create({
    baseURL: baseUrl,  
  });

  export default instance