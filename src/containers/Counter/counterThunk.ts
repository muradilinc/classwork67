import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {RootState} from "../../app/store.ts";

const URL = 'https://muradilinc20-default-rtdb.europe-west1.firebasedatabase.app';

export const fetchCounter = createAsyncThunk(
    'counter/fetch',
    async () => {
        const response = await axios.get<number | null>(URL + '/counter.json');
        return response.data ?? 0;
    });

export const increaseCounter = createAsyncThunk<void, undefined, {state: RootState}>(
    'counter/increase',
    async (_, thunkAPI) =>{
        const currentValue = thunkAPI.getState().counter.value;
        await axios.put(URL + '/counter.json', currentValue + 1);
    }
)