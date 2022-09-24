import axios from "axios";
export default axios.create({
    // baseURL:"https://time-table-server.herokuapp.com",
    baseURL:"https://postdeliveryapp.herokuapp.com",
    // baseURL:"http://192.168.221.28:8282",
    header:{
        "Content-type":"application/json"
    }
});