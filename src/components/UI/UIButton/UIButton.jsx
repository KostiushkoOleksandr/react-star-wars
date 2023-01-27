import React from 'react';
import PropTypes from "prop-types";
import cn from "classnames";

import styles from './UIButton.module.css';
import '../index.css'
import PeopleNavigation from "../../PeoplePage/PeopleNavigation";

const UiButton =
    ({
         text,
         onClick,
         disable,
         theme = 'dark'
     }) => {
    return (
        <button
            onClick={onClick}
            disabled={disable}ф
            className={cn(styles.button, styles[theme])}
        >
            {text}
        </button>
    );
};

UiButton.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    disable: PropTypes.bool,
    theme: PropTypes.string
}

export default UiButton;