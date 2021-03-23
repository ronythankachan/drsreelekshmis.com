import axios from 'axios';

const backend = axios.create({
    baseURL: 'http://18.223.242.69:8001'
});

export default backend;