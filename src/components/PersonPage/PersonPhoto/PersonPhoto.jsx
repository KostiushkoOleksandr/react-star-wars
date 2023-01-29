import React from 'react';
import PropTypes from 'prop-types';

import styles from './PersonPhoto.module.css';

const PersonPhoto = ({personPhoto, personName}) => {
    return (
        <>
            <div className={styles.container}>
                <img className={styles.photo} src={personPhoto} alt={personName}/>
            </div>
        </>
    );
};

PersonPhoto.propType = {
    personPhoto: PropTypes.string,
    personName: PropTypes.string
    // personId: PropTypes.string,
    // personFavorite: PropTypes.bool,
    // setPersonFavorite: PropTypes.func,
}
export default PersonPhoto;