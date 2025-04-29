import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: 'b1e8d42d2fe54b42a2d8c8d46d39ee87'
    }
});