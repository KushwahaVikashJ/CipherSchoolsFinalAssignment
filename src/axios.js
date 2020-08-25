import axios from 'axios';

const instance  = axios.create({
    baseURL:"https://tlms-cbd80.firebaseio.com/"
})

export default instance;