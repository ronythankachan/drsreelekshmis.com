import axios from 'axios';

const backend = axios.create({
    baseURL: 'https://drsreelekshmis.com/'
});

export default backend;