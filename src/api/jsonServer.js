import axios from "axios";

export default axios.create({
    //this url has to change every time ngrok starts
    baseURL:'https://fb01-83-57-58-27.ngrok-free.app'
})