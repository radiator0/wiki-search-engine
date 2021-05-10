import axios from "axios";

const client = axios.create({
    baseURL: 'http://localhost:9200',
  });

export default client