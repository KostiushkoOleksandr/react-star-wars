import React, {useEffect, useState, Suspense} from 'react';
import PropTypes from "prop-types";
import {useParams} from "react-router-dom";

import PersonLinkBack from "@components/PersonPage/PersonLinkBack";
import PersonInfo from "@components/PersonPage/PersonInfo";
import PersonPhoto from "@components/PersonPage/PersonPhoto";

import UILoading from "@components/UI/UILoading";

import {withErrorApi} from "@hoc/withErrorApi";
import {getApiResource} from "@utils/network";
import {getPeopleImage} from "@services/getPeopleData";
import {API_PERSON} from "@constans/api";

import styles from './PersonPage.module.css';


const PersonFilms = React.lazy(() => import("@components/PersonPage/PersonFilms"));

const PersonPage = ({setErrorApi}) => {
    const [personInfo, setPersonInfo] = useState(null);
    const [personName, setPersonName] = useState(null);
    const [personPhoto, setPersonPhoto] = useState(null);
    const [personFilms, setPersonFilms] = useState(null);


    const {id} = useParams();

    useEffect(() => {
        (async () => {
            const res = await getApiResource(`${API_PERSON}/${id}/`);

            if (res) {
                setPersonInfo([
                    {title: 'Height', data: res.height},
                    {title: 'Mass', data: res.mass},
                    {title: 'Hair Color', data: res.hair_color},
                    {title: 'Skin Color', data: res.skin_color},
                    {title: 'Eye Color', data: res.eye_color},
                    {title: 'Birth Year', data: res.birth_year},
                    {title: 'Gender', data: res.gender},
                ]);

                setPersonName(res.name);
                setPersonPhoto(getPeopleImage(id));

                res.films.length && setPersonFilms(res.films);

                setErrorApi(false);
            } else {
                setErrorApi(true);
            }
        })();
    }, [])

    return (
        <>
            <PersonLinkBack />
            <div className={styles.wrapper}>
                <span className={styles.person__name}>{personName}</span>

                <div className={styles.container}>
                    <PersonPhoto
                        personPhoto={personPhoto}
                        personName={personName}
                    />

                    {personInfo && <PersonInfo personInfo={personInfo}/>}

                    {personFilms && (
                        <Suspense fallback={<UILoading />}>
                            <PersonFilms personFilms={personFilms} />
                        </Suspense>
                    ) }
                </div>
            </div>
        </>
    )
};


PersonPage.propType = {
    setErrorApi: PropTypes.func
}
export default withErrorApi(PersonPage);