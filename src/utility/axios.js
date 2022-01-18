import axios from "axios";

const instance = axios.create({ baseURL: 'https://rainierio-api-svc.online/', withCredentials: false });

export default instance