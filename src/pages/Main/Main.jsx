import React, { useEffect } from 'react';
import {useParams, Link} from 'react-router-dom';
// import {checkUser} from 'utils/authentification';
import Gallery from 'components/Gallery/Gallery';

const Main = (props) => {
    const {selection} = useParams();
    
    if (selection !== 'new' && selection !== 'popular') {
        props.history.push('/404');
    }

    // useEffect(checkUser, []);

    return (
        <>
            <Link to={'/gallery/popular'}>SOS</Link>
            <Gallery selection={selection}/>
        </>
    );
};

export default Main;