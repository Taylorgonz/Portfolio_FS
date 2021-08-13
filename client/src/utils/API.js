import axios from "axios";

const API = {
    getPhotos: function() {
        return axios.get("/api/photos");
    },
    getWebsites: function() {
        return axios.get("/api/websites");
    },
}

export default API;
