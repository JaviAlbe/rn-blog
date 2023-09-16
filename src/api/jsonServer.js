import axios from "axios";

export default axios.create({
    //this url has to change every time ngrok starts
    baseURL:'https://40df-83-57-232-11.ngrok-free.app'
})