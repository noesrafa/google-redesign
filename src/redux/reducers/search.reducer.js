import { FETCH_GOOGLE_FAIL, FETCH_GOOGLE_REQUEST, FETCH_GOOGLE_SUCCESS } from "../actions/search.actions";

const initialState = {
    loading: false,
    data: [],
    error: ''
}

const searchReducer = ( state = initialState, action ) => {

    switch (action.type) {
        case FETCH_GOOGLE_REQUEST:
            return {
                ...state,
                loading: true
            }
        
        case FETCH_GOOGLE_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: ''
            }

        case FETCH_GOOGLE_FAIL:
            return {
                loading: false,
                data: [],
                error: action.payload
            }

        default:
            return state
    }
}

export default searchReducer