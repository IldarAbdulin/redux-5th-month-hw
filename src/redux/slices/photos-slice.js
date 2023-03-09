import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchAllPhotos = createAsyncThunk(
    'fetchAllPhotos',
    async function (_, {dispatch}) {
        try {
            dispatch(isLoading())
            await axios
                    .get('https://jsonplaceholder.typicode.com/photos?_limit=10')
                    .then(({data}) => dispatch(getPhotos(data)))
        } catch (error) {
            dispatch(isError(error))
        }
    }
)

export const fetchPhotoById = createAsyncThunk(
    'fetchPhotoById',
    async function (id, {dispatch}) {
        try {
            dispatch(isLoading())
            await axios
                    .get(`https://jsonplaceholder.typicode.com/photos/${id}`)
                    .then(({data}) => dispatch(getPhoto(data)))
        } catch (error) {
            dispatch(isError(error))
        }
    }
)

const photosSlice = createSlice({
    name: 'photosSlice',
    initialState: {
        photosItems: [],
        photoItem: {},
        isLoading: false,
        error: ''
    },
    reducers: {
        getPhotos: (state, action) => {
            state.photosItems = action.payload
            state.isLoading = false
        },
        getPhoto: (state, action) => {
            state.photoItem = action.payload
            state.isLoading = false
        },
        isLoading: (state) => {
            state.isLoading = true
        },
        isError: (state, action) => {
            state.error = action.payload
        }
    }
})

const { getPhotos, getPhoto, isLoading, isError } = photosSlice.actions
export default photosSlice.reducer