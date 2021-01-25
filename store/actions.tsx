import { createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { IStore } from "../interfaces";
import {api_key} from './api_key'
import { clearPosts } from "./reducer";

export const fetchPhotoes = createAsyncThunk('photoes', async (_value , _thunkAPI)=>{

    const state: IStore = (_thunkAPI.getState() as any).data as IStore;
    const query = encodeURIComponent(state.searchText.toString());
    const page = state.page;
    const num_page = state.num_page;

    const response = await fetch(`https://api.unsplash.com/search/photos/?query=${query}&page=${page}&per_page=${num_page}&client_id=${api_key}`);
    
    if(!response.ok) throw new Error();

    const result = await  response.json();

    return result["results"];
});

