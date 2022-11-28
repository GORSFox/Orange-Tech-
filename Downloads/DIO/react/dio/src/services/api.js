import axios from 'axios';

export const api =axios.create({
    basseURL: 'http://localhost:8001',
});