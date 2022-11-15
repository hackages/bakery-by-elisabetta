import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchUser = createAsyncThunk('fetch_user', async () => {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users/2')
    return data
})