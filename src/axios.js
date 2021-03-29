import axios from 'axios';

const backend = axios.create({
    baseURL: 'http://localhost:8001'
});

export default backend;