import React, { useState } from 'react';
import {useParams, Link} from 'react-router-dom';
import {createClient} from 'utils/authentification';

import styles from './auth.module.scss';

const Auth = (props) => {
    const {dialog} = useParams();
    if (dialog !== 'login' && dialog !== 'register') {
        props.history.push('/404');
    }

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e, type) => {
        e.preventDefault();

        if (type === 'register') {
            createClient(login, password);
        }
    }

    return (
        <>
        {dialog === 'login' ? (
            <div className={styles.container}>
                <form
                    className={styles.form}
                    onSubmit={(e) => submitHandler(e, 'login')}
                >
                    <h3>Вход</h3>
                    <input
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        placeholder='Логин'
                    />
                    <input
                        value={password}
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Пароль'
                    />
                </form>
                <Link to='/auth/register'>Перейти к регистрации</Link>
            </div>
        ) : (
            <div className={styles.container}>
                <form
                    className={styles.form}
                    onSubmit={(e) => submitHandler(e, 'register')}
                >
                    <h3>Регистрация</h3>
                    <input
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        name="login" placeholder='Логин'
                    />
                    <input
                        value={password}
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Пароль'
                    />
                    <button type="submit">Создать пользователя</button>
                </form>
                <Link to='/auth/login'>Перейти ко входу</Link>
            </div>
        )}
        </>
    )
};

export default Auth;