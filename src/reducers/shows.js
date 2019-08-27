import {
    showRequest,
    showSuccess,
    showFailure
} from '../modules/actions'

const initialState = {
    oneSeries: null,
    isLoading: false,
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case showRequest.toString():
            return {
                ...state,
                oneSeries: null,
                isLoading: true
            }
        case showSuccess.toString():
            return {
                ...state,
                oneSeries: action.payload,
                isLoading: false
            }
        case showFailure.toString():
            return {
                ...state,
                error: action.error,
                isLoading: false
            }
        default:
            return state
    }
}
