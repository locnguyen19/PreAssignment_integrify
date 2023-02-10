import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllCountries } from '../redux/actions/countriesActions'
import CountriesTables from '../components/Nav/CountriesTables'

function Home() {
    const { countries } = useSelector(state => state.countriesReducer)
    const { loading } = useSelector(state => state.alertsReducer)
    const [totalCountries, setTotalCountries] = useState([])
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getAllCountries())


    }, [])

    //      useEffect(() => {

    //         setTotalCountries(countries)
    //        console.log(countries)

    //  }, [countries])

    console.log(countries)


    return (
        <>
            <div className="d-flex flex-column align-items-center">


                <CountriesTables  countries={countries} />

            </div>

        </>
    )
}

export default Home