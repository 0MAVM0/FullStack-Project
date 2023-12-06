import { axiosCall } from './axios';

const ACCESS_TOKEN_KEY = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';

function isLoggedIn() {
    const token = localStorage.getItem(ACCESS_TOKEN_KEY);
    return token !== null;
}

async function getFurnitures() {
    const responce = await axiosCall('api/furniture')
    return responce
}


export {
    getFurnitures,
    isLoggedIn,
    ACCESS_TOKEN_KEY,
    REFRESH_TOKEN_KEY
}