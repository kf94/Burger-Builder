import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-2f747.firebaseio.com/'
});

export default instance;