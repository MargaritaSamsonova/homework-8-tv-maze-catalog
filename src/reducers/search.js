import {
    searchRequest,
    searchSuccess,
    searchFailure
} from '../modules/actions'

const initialState = {
    series: [],
    isLoading: false,
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case searchRequest.toString():
            return {
                ...state,
                series: [],
                isLoading: true
            }
        case searchSuccess.toString():
            return {
                ...state,
                series: action.payload,
                isLoading: false
            }
        case searchFailure.toString():
            return {
                ...state,
                error: action.error,
                isLoading: false
            }
        default:
            return state
    }
}
