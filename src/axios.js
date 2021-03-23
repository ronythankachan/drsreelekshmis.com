import axios from 'axios';

const backend = axios.create({
    baseURL: 'http://drsreelekshmis.com:8001'
});

export default backend;