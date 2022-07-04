import axios from "axios";
import { useState } from "react";

export const countryAction = {
    GET_COUNTRY_REQUEST: "GET_COUNTRY_REQUET",
    GET_COUNTRY_SUCCESS: "GET_COUNTRY_SUCCESS",
    GET_COUNTRY_FAILURE: "GET_COUNTRY_FAILURE",
    DELETE_COUNTRY_SUCCESS: "DELETE_COUNTRY_SUCCESS",
    EDIT_COUNTRY_SUCCESS: "EDIT_COUNTRY_SUCCESS",

}

export const fetchCountryRequest = () => ({
    type: countryAction.GET_COUNTRY_REQUEST
});
export const fetchCountrySuccess = (data) => ({
    type: countryAction.GET_COUNTRY_SUCCESS,
    payload: data
});
export const fetchCountryFailure = () => ({
    type: countryAction.GET_COUNTRY_FAILURE
});

export const fetchCountry = (sort) => (dispatch) => {

    dispatch(fetchCountryRequest());

    axios({
        url: "http://localhost:8000/countrys",
        method: "GET",
        params: {
            _sort: "population",
            _order: sort
        }
    }).then((r) => dispatch(fetchCountrySuccess(r.data))).catch((error) => dispatch(fetchCountry(error.data)))
}

///////////////////////////////////////////////////////////

export const DeleteCountrySuccess = () => ({
    type: countryAction.DELETE_COUNTRY_SUCCESS
});
export const handleSplice = (id) => (dispatch) => {
axios({
        url: `http://localhost:8000/countrys/${id}`,
        method: "DELETE",

    }).then((res) => {
        console.log(res)
        dispatch(DeleteCountrySuccess(res.data))
    })
}

////////////////////////////////////
export const EditCountrySuccess = (data) => ({
    type: countryAction.EDIT_COUNTRY_SUCCESS,
    payload:data

});

export const editCountry = (id) => (dispatch) => {
    axios({
        url: `http://localhost:8000/countrys/${id}`,
        method: "GET",

    }).then((res) => {
     //  console.log("res",res.data)
        dispatch(EditCountrySuccess(res.data))

    })
}