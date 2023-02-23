const initialState = {
    number: 0,
    isDisabled: false
}

export const counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'COUNT_PLUS':
            return  {
                ...state,
                number: state.number + 1,
            }
        case 'DISABLED_STATE':
            return {
                ...state,
                isDisabled: state.number === 0 ? true : false
            }
        case 'COUNT_MINUS':
            return {
                ...state,
                number: state.number - 1
            }
        default:
            return state
    }
}