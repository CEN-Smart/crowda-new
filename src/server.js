import axios from "axios";

const server = axios.create({
 // baseURL: "http://localhost:8000",
  baseURL: 'https://malaika-backend-server.onrender.com/'
  
});

export default server;
