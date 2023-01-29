import React from 'react';
import { useNavigate } from 'react-router-dom';

import iconBack from './img/back.png';

import styles from './PersonLinkBack.module.css';
const PersonLinkBack = () => {

    const navigate = useNavigate()
    const handleGoBack = event => {
        event.preventDefault()
        navigate(-1)
    }

    return (
        <a href='#'
           onClick={handleGoBack}
           className={styles.link}>

            <img className={styles.link__img} src={iconBack} alt="back"/>
            <span>
                Back
            </span>
        </a>
    );
};

export default PersonLinkBack;