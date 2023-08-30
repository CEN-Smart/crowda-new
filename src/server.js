import axios from "axios";

const server = axios.create({
  // baseURL: "http://localhost:8000",
  baseURL:'https://ipfs-server.onrender.com'
});

export default server;
