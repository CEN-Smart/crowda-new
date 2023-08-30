import axios from "axios";

const server = axios.create({
  //baseURL:'https://ipfs-server.onrender.com'
  baseURL:'http://localhost.com:8000'

});

export default server;
