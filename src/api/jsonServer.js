import axios from "axios";

export default axios.create({
    //this url has to change every time ngrok starts
    baseURL:'https://7949-83-57-58-27.ngrok-free.app'
})