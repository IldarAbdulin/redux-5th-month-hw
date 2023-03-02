import { types } from "./types";
import axios from 'axios'

const sendFormAction = (info) => ({
    type: types.SEND_FORM,
    payload: info
})

const clearMessage = () => ({
    type: types.CLEAR_MESSAGE
})

const sendFormWithError = (error) => ({
    type: types.ERROR_FORM,
    payload: error
})

export const sendForm = (name, username, email, website) => (dispatch) => {{
    axios
        .post('https://jsonplaceholder.typicode.com/users', {
            name, username, email, website
        })
        .then(({data}) => {
            dispatch(sendFormAction(data))
        })
        .catch((error) => dispatch(sendFormWithError(error)))

        setTimeout(() => {
            dispatch(clearMessage())
        }, 5000)
    }
}