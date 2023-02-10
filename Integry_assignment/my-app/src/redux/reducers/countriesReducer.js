const initialData = {
    countries : [],
    country:[]

};

export const countriesReducer = (state=initialData , action)=>{

     switch(action.type)
     {
         case 'GET_ALL_COUNTRIES' : {
             return{
                 ...state,
                 countries : action.payload
             }
         }
         case 'GET_A_COUNTRY' : {
            return{
                ...state,
                country : action.payload
            }
        }
         
         default:return state
     }

}
