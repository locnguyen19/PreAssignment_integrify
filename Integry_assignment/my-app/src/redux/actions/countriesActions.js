import axios from 'axios';

export const getAllCountries=()=>async dispatch=>{

    dispatch({type: 'LOADING' , payload:true})

    try {
        const response = await axios.get('https://restcountries.com/v3.1/all')
        dispatch({type: 'GET_ALL_COUNTRIES', payload:response.data})
        dispatch({type: 'LOADING' , payload:false})
    } catch (error) {
        console.log(error)
        dispatch({type: 'LOADING' , payload:false})
    }

}

export const getACountry=(name)=>async dispatch=>{

    

    try {
        const response = await axios.get( `https://restcountries.com/v3.1/name/${name}` )
        
        dispatch({type: 'GET_A_COUNTRY', payload:response.data})
       
    } catch (error) {
        console.log(error)
        
    }

}