import React from 'react'
import DataTable from 'react-data-table-component';
import { Route } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import styles from './CountriesTables.module.css'
import { inputAdornmentClasses } from '@mui/material';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
function CountriesTables(countries) {
    const [search, setSearch] = useState("")
    const [filteredcountries, setFilteredCountries] = useState(countries.countries)

    const columns = [
        {
            name: "Country Name",
            selector: (row) => row.name.common,
        },
        {
            name: "Region",
            selector: (row) => row.region,
        },
        {
            name: "Country Flag",
            selector: (row) => <img width={100} height={50} src={row.flags.png} />,
        },
        {
            name: "Population",
            selector: (row) => row.population,
        },
        {
            name: "View",
            selector: (row) =>    <Link to={`/countries/${row.name.common}`} >
                  <button     ><VisibilityIcon ></VisibilityIcon></button>
            </Link>,
          
        },

    ]


    console.log(countries.countries)

useEffect(() => {
    const result = countries.countries.filter((country) => {
        return country.name.common.toLowerCase().match(search.toLowerCase())
    })
    setFilteredCountries(result)
}, [search])

    return (

        <DataTable
        title = "React Country List"
            columns={columns}
            data={filteredcountries}
            pagination
            paginationRowsPerPageOptions={[5]}
            paginationPerPage={5}
            fixedHeader
            fixedHeaderScrollHeight = "500px"
            subHeader
            subHeaderComponent = {
                
                <input
                type = "text"
                placeholder = "Search a country"
                className = "w-45 form-control"
                value = {search}
                onChange = {(e) => setSearch(e.target.value)}
                ></input>}
        />

        

    )
}

export default CountriesTables
