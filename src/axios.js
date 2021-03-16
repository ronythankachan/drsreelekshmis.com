import axios from 'axios';

const backend = axios.create({
    baseURL: 'http://0.0.0.0:8001'
});

export default backend;