import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { getACountry } from '../redux/actions/countriesActions'
import styles from './country-detail.module.css';
import './country-detail.css';
import { Link } from 'react-router-dom';

function CountryDetails() {


    const { country } = useSelector(state => state.countriesReducer)

    const dispatch = useDispatch()

    const { name } = useParams();

    useEffect(() => {
        dispatch(getACountry(name))

    }, [])

    console.log("data", country[0])

    const check = country[0]?.independent

    return (
        <div className={styles.countryDetail}  >
            <div className={styles.container}>
                <div className={styles.left}>
                    <Link className="backButton" to='/'><i className={` fas fa-long-arrow-alt-left ${styles.backIcon}`} />Back</Link>
                    <img className={styles.countryFlag} src={country[0]?.flags.png} alt="" />
                </div>
                <div className={styles.right}>
                    <div className={styles.row}>
                        <div className={styles.col}>
                            <h3>The country belongs to {country[0]?.region} region and {country[0]?.subregion}  subregion</h3>
                            <h3>Located at the {country[0]?.latlng[0]}  &deg; and  {country[0]?.latlng[1]}  &deg;. This country has population of {country[0]?.population}	</h3>
                            {check && (
                                <>
                                <h3>it has gained the independent according to the CIA FactBook</h3>
                                </>
                            )}                       
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountryDetails
