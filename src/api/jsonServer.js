import axios from "axios";

export default axios.create({
    //this url has to change every time ngrok starts
    baseURL:'https://637b-83-57-232-11.ngrok-free.app'
})