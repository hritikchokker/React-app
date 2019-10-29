import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 73b8126cd58ca08863579957b3d09272579d7c1330d67343c11ed74e9f658c67'
    }
});