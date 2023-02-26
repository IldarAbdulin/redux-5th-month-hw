export const addNumber = (number) => ({
    type: 'ADD_NUMBER',
    payload: number
})
export const changeNumber = (number) => ({
    type: 'CHANGE_NUMBER',
    payload: number
})
export const clearState = () => ({
    type: 'CLEAR_STATE'
})