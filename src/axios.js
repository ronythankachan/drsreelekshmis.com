import axios from 'axios';

const backend = axios.create({
    baseURL: 'http://drsreelekshmis.com/'
});

export default backend;