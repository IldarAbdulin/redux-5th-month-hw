import { types } from "../types"

const initialState = {
    user: {},
    message: '',
    error: ''
}

export const formReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.SEND_FORM:
            return {
                ...state,
                user: action.payload,
                message: 'Вы успешно прошли регистрацию!'
            }
        case types.CLEAR_MESSAGE: 
            return{
                ...state,
                message: ''
            }
        case types.ERROR_FORM:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}