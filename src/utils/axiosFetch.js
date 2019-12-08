import axios from 'axios';

const user = localStorage.getItem('user');

export const axiosFetch = axios.create({
    baseURL: 'http://gallery.dev.webant.ru/api/',
    headers: {
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': '*',
        'Authorization': (user && user.access_token ? ('Bearer ' + user.access_token) : undefined),
        'Accept': 'application/json',
    }
});

export const oauthFetch = axios.create({
    baseURL: 'http://gallery.dev.webant.ru/oauth/v2/',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*'
    }
})