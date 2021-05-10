import axios from "axios";
import cfg from "../config/default.json";
const client = axios.create({
  baseURL: "http://" + cfg.elastic.host + ":" + cfg.elastic.port,
});

export default client;
