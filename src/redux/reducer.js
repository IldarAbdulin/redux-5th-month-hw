const initialState = {
    numberValue: '',
    count: null
}

export const numberReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_NUMBER' : {
            return {
                ...state,
                count: +state.count + +action.payload,
                numberValue: ''
            }
        }
        case 'CHANGE_NUMBER': {
            return {
                ...state,
                numberValue: +action.payload
            }
        }
        case 'CLEAR_STATE': {
            return {
                ...state,
                count: null,
                numberValue: ''
            }
        }
        default: {
            return state
        }
    }
}