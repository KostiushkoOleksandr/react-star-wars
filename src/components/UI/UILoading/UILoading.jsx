import React, {useState} from 'react';
import PropTypes, {string} from "prop-types";

import loaderBlack from './img/loader-black.svg';
import loaderBlue from './img/loader-blue.svg';
import loaderWhite from './img/loader-white.svg';

import styles from './UILoading.module.css';

const UiLoading = ({theme = 'white'}) => {
    const [loaderIcon, setLoaderIcon] = useState();

    return (
        <div>
            <img
                className={styles.loader}
                src={loaderWhite}
                alt="Loading..."

            />
        </div>
    );
};

UiLoading.propType = {
    theme: PropTypes.string
}

export default UiLoading;