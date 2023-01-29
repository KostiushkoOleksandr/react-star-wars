import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import styles from './PeopleNavigation.module.css';
import UIButton from "@ui/UIButton";


const PeopleNavigation = ({getResource, prevPage, nextPage, counterPage}) => {

    const handleChangeNext = () => getResource(nextPage);
    const handleChangePrev = () => getResource(prevPage);

    return (
        <div className={styles.container}>
            <Link className={styles.buttons} to={`/people/?page=${counterPage-1}`}>
                <UIButton
                    text='Previous'
                    onClick={handleChangePrev}
                    disable={!prevPage}
                />
            </Link>
            <Link className={styles.buttons} to={`/people/?page=${counterPage+1}`}>
                <UIButton
                    text='Next'
                    onClick={handleChangeNext}
                    disable={!nextPage}
                />
            </Link>
        </div>
    );
};

PeopleNavigation.propTypes = {
    getResource: PropTypes.func,
    prevPage: PropTypes.string,
    nextPage: PropTypes.string,
    counterPage: PropTypes.number
}
export default PeopleNavigation;