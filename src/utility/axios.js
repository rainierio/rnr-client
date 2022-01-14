import axios from "axios";

const instance = axios.create({ baseURL: 'http://3.13.224.4/', withCredentials: false });

export default instance