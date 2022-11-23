import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const Home = () => {

    const location = useLocation();
    const history = useHistory();


    const navigate = (path) => {
        history.push(path)
    }

    const goBack = () => {
        history.goBack();
    }

    const goForward = () => {
        history.goForward();
    }
    return (
        <div>
            <h1>Hi I'm the home page</h1>
            <div>
                <button onClick={() => navigate('/profile')}>PROFILE</button>
                <button onClick={goBack}>GO BACK</button>
                <button onClick={goForward}>NEXT</button>
            </div>
        </div>
    );
}

export default Home;
