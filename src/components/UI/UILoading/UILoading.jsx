import React, {useState, useEffect} from 'react';
import PropTypes, {string} from "prop-types";
import cn from 'classnames';

import loaderBlack from './img/loader-black.svg';
import loaderBlue from './img/loader-blue.svg';
import loaderWhite from './img/loader-white.svg';

import styles from './UILoading.module.css';

const UiLoading = ({theme= 'white',
    isShadow = true,
    classes
}) => {
    const [loaderIcon, setLoaderIcon] = useState();

    useEffect(() => {
        switch (theme) {
            case 'black': setLoaderIcon(loaderBlack); break;
            case 'blue': setLoaderIcon(loaderBlue); break;
            case 'white': setLoaderIcon(loaderWhite); break;
            default: setLoaderIcon(loaderWhite); break;
        }
    }, [])

    return (
        <div>
            <img
                className={cn(styles.loader, isShadow && styles.shadow, classes)}
                src={loaderIcon}
                alt="Loading..."
            />
        </div>
    );
};

UiLoading.propType = {
    theme: PropTypes.string,
    isShadow: PropTypes.bool,
    classes: PropTypes.string,
}

export default UiLoading;