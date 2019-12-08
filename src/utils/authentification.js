import {history} from '../index';
import axios from 'axios';
import { axiosFetch } from './axiosFetch';
import qs from 'qs';

export const logout = () => {
    return history.push('/auth');
}

export const checkUser = () => {
    const user = localStorage.getItem('user');

    if (!user) {
        logout();
    } else {
        
    }
}

export const createClient = (name, password) => {
    axiosFetch.post('/clients', {
        name,
        allowedGrantTypes: ['password', 'refresh_token']
    })
    .then(response => {
        const user = response.data;
        localStorage.setItem('user', JSON.stringify(user));
        axios.request({
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            },
            url: 'http://gallery.dev.webant.ru/oauth/v2/token',
            method: 'post',
            data: qs.stringify({
                client_id: user.id,
                clientId: `${user.id}_${user.randomId}`,
                grant_type: 'password',
                password,
                username: user.name,
                client_secret: user.secret,
                clientSecret: user.secret
            }),
        })
        .then(response => {
            console.log(response.data);
        })
        .then(() => {
            return 'true'
        })
    })
}