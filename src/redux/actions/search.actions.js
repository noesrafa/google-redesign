import Axios from "axios";
import { API_KEY, CTX_KEY } from "../../api/apikeys";

export const FETCH_GOOGLE_REQUEST = 'FETCH_GOOGLE_REQUEST'
export const FETCH_GOOGLE_SUCCESS = 'FETCH_GOOGLE_SUCCESS'
export const FETCH_GOOGLE_FAIL = 'FETCH_GOOGLE_FAIL'

export const fetchGoogleRequest = () => {
    return {
        type: FETCH_GOOGLE_REQUEST
    }
}

export const fetchGoogleSuccess = (termSearched) => {
    return {
        type: FETCH_GOOGLE_SUCCESS,
        payload: termSearched
    }
}

export const fetchGoogleFail = (error) => {
    return {
        type: FETCH_GOOGLE_REQUEST,
        payload: error
    }
}

const fetchGoogleProcess = term => {

    return dispatch => {

        dispatch(fetchGoogleRequest())

        Axios.get(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CTX_KEY}&q=${term}`)
            .then( response => {
                dispatch( fetchGoogleSuccess(response))
            })
            .catch( error => {
                dispatch( fetchGoogleFail('Hubo un error'))
            })
    }
}

export default fetchGoogleProcess