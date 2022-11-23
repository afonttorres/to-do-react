import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const AboutPage = () => {

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
            <h1>About us | FAQS</h1>
            <div>
                <button onClick={() => navigate('/')}>HOME</button>
                <button onClick={goBack}>GO BACK</button>
                <button onClick={goForward}>NEXT</button>
            </div>
        </div>
    );
}

export default AboutPage;
