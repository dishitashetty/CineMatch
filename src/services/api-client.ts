import axios from "axios";

export default axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: '7ca98b08beebf0d76c27b0bc5bf8579b'
    }
})