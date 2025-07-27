import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/api', // Your backend URL
});

export const fetchData = (filters) => {
    return api.get('/data', { params: filters });
};

export const fetchFieldOptions = (fieldName) => {
    return api.get(`/fields/${fieldName}`);
};