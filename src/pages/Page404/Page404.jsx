import React from 'react';
import {Link} from 'react-router-dom';

import styles from './page404.module.scss';

const Page404 = () => (
    <div className={styles.container}>
        <div>Page not found.</div>
        <Link to='/gallery'>Navigate to main page</Link>
    </div>
)

export default Page404;
