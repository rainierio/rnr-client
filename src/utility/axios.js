import axios from "axios";

const localURL = process.env.LOCAL_API_ENDPOINT
const productionURL = process.env.PRODUCTION_API_ENDPOINT
const envstatus = process.env.NODE_ENV


console.log(localURL, productionURL, envstatus);
//const instance = axios.create({ baseURL: 'https://rainierio-api-svc.online/', withCredentials: false });
const instance = axios.create({ baseURL: 'https://rnr-server.vercel.app/', withCredentials: false });
//const instance = axios.create({ baseURL: ' http://localhost:5000/', withCredentials: false });

export default instance