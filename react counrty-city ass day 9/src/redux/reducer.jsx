import { countryAction } from "./action"

const initState = {
    loadingg: false,
    country: [],
    singlePro:[],
    error: false,
}


export const countryReducer = (state = initState, { type, payload }) => {
    
    switch (type) {
        case countryAction.GET_COUNTRY_REQUEST: { return { ...state, loading: true, error: false } }
        case countryAction.GET_COUNTRY_SUCCESS: { return { ...state, loading: false, country: payload } }
        case countryAction.GET_COUNTRY_FAILURE: { return { ...state, loading: false, error: true } }
       case countryAction.EDIT_COUNTRY_SUCCESS: { return { ...state, loading: false, singlePro:payload } }
        
        default: return state
    }
}
