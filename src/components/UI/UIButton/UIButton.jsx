import React from 'react';
import PropTypes from "prop-types";
import cn from "classnames";

import styles from './UIButton.module.css';
import '../index.css'

const UiButton =
    ({
         text,
         onClick,
         disable,
         theme = 'dark',
         classes
     }) => {
    return (
        <button
            onClick={onClick}
            disabled={disable}
            className={cn(styles.button, styles[theme], classes)}
        >
            {text}
        </button>
    );
};

UiButton.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    disable: PropTypes.bool,
    theme: PropTypes.string,
    classes: PropTypes.string
}

export default UiButton;