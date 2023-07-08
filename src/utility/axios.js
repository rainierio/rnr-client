import axios from "axios";

//const instance = axios.create({ baseURL: 'https://rainierio-api-svc.online/', withCredentials: false });
const instance = axios.create({ baseURL: ' http://localhost:5000/', withCredentials: false });

export default instance