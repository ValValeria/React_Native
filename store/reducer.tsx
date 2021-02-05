import { createSlice } from "@reduxjs/toolkit";
import { IStore, Post } from "../interfaces";
import { fetchPhotoes } from "./actions";

const initState: IStore = {
    posts:[],
    searchText: "",
    page:1,
    num_page:10,
};

const reducer = createSlice({
    name: "data",
    initialState: Object.assign({}, initState),
    reducers: {
        addPosts: (state, action)=>{
            state.posts.push(...action.payload);
        },
        updateSearchText: (state, action)=>{
            state.searchText = action.payload;
        },
        changePageNum(state){
            state.page+=1;
        },
        clearPosts(state){
            state.posts.splice(0, state.posts.length)
        },
    },
    extraReducers:{
        [fetchPhotoes.fulfilled.toString()]:(state,action)=>{
           const data: Post[] = action.payload;
           state.posts.push(...data);
        },
        [fetchPhotoes.rejected.toString()]: (_state, action) => {
           const error = action.error.message;
           console.log(error)
        },
    }
});

export const { addPosts, updateSearchText, changePageNum, clearPosts} = reducer.actions;

export default reducer.reducer;